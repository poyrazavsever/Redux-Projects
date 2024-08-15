import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";
import {
    sub
} from "date-fns"

const initialState = {
    posts: [],
    status: 'idle',
    error: null

}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffe: 0,
                        }
                    }
                }
            }
        },

        reactionAdded(state, action) {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if(existingPost) {
                existingPost.reactions[reaction]++
            } 
        }
    }
})

export const selectAllPost = (state) => state.posts;

export const {
    postAdded, reactionAdded
} = postsSlice.actions

export default postsSlice.reducer