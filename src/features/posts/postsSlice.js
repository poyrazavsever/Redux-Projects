import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title: "Learning Redux Toolkit", content: "I've heard good things"},
    {id: "2", title: "Slices..", content: "There more I say slice, the more I want pizza"},
]

const postsSlice = createSlice({
    name: 'posts', 
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPost = (state) => state.posts;

export default postsSlice.reducer