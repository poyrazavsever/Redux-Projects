import { configureStore } from "@reduxjs/toolkit";

// Reducers
import todoReducer from "../features/todos/todoSlice"

export const store = configureStore({
    reducer: { //eylemlere dayalı olarak mevcut durumu güncellemek için kullanılıyor. 
        todos : todoReducer
    }
})