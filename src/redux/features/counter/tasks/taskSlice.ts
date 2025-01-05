import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter:"all"|"high"|"medium"|"low";
}

const initialState: InitialState = {
    tasks:[
        {
            id:"cksjciah86",
            title:"Task 1",
            description:"This is task 1",
            dueDate:"2025-11",
            isCompleted: false,
            priority:"High",
        },
        {
            id:"cksjci38cb6",
            title:"Task 2",
            description:"This is task 2",
            dueDate:"2025-11",
            isCompleted: false,
            priority:"Low",
        },
        {
            id:"cksjc98BHhb6",
            title:"Task 3",
            description:"This is task 3",
            dueDate:"2025-11",
            isCompleted: false,
            priority:"Medium",
        },
    ],
    filter:"all"
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{}
});

export const selectTasks = (state:RootState) => {
    return state.todo.tasks;
};

export const selectFilter = (state:RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;