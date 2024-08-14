import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice"

export const store = configureStore({
    reducer: { //eylemlere dayalı olarak mevcut durumu güncellemek için kullanılıyor. 
        posts: postsReducer,

    }
})