import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    namme:"user",
    initialState:initialState,
    reducers:{
        addUser:(state,action:PayloadAction<IUser>)=>{
            const userData:createUser(Action.payLoad);
            state.users.push(userData);
        },
        removeUser:(state,action:PayloadAction<string>)=>{
            state.users = state.users.filter((user)=>user.id!==action.payLoad)
        },
    },
});