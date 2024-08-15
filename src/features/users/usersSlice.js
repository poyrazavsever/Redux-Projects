import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : '0 ', name :'Osmaan Nabi'},
    {id: '1', name: 'Ahmet Abiq'},
    {id: '2', name: 'Orhan Kazmaa'},
]


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer