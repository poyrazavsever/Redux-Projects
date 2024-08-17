import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdded: {
            reducer(state,action){
                state.push(action.payload)
            },

            prepare(title, content){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content, 
                        date: new Date().toISOString(),
                        status: {
                            important: false,
                            norush: false,
                            unnecessary: false,
                        },
                        categoryies: {
                            work: false,
                            fun: false,
                            personel: false,
                        }
                    }
                }
            },
           
        },

        statusAdded(state, action) {
            const {todoId, statu} = action.payload
            const existingTodo = state.find(todo => todo.id = todoId)

            if(existingTodo) {
                if(existingTodo.status[statu] === true) {
                    existingTodo.status[statu] = false
                }else{
                    existingTodo.status[statu] = true
                }
            }
        },

        categoryAdded(state, action) {
            const {todoId, category} = action.payload
            const existingTodo = state.find(todo => todo.id = todoId)

            if(existingTodo) {
                if(existingTodo.categoryies[category] === true) {
                    existingTodo.categoryies[category] = false
                }else {
                    existingTodo.categoryies[category] = true
                }
            }
        },
    }
})


export const selectAllTodos = (state) => state.todos

export const {todoAdded, statusAdded, categoryAdded} = todoSlice.actions

export default todoSlice.reducer