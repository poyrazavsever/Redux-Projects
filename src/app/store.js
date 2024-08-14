import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
    reducer: { //eylemlere dayalı olarak mevcut durumu güncellemek için kullanılıyor. 
        counter: counterReducer,
    }
})