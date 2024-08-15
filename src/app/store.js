import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice"
import usersReducer from "../features/users/usersSlice"

export const store = configureStore({
    reducer: { //eylemlere dayalı olarak mevcut durumu güncellemek için kullanılıyor. 
        posts: postsReducer,
        users: usersReducer,

    }
})