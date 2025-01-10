import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Finish Project Report",
      description: "Complete the final report continuing github for the Q4 project.",
      dueDate: "2025-01",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "3",
      title: "Code Review",
      description: "Review pull requests for the latest sprint.",
      dueDate: "2025-01",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "4",
      title: "Client Presentation",
      description: "Prepare slides and present updates to the client.",
      dueDate: "2025-02",
      isCompleted: false,
      priority: "medium",
    },
    {
      id: "5",
      title: "Update Documentation",
      description: "Ensure all project documentation is up-to-date.",
      dueDate: "2025-02",
      isCompleted: true,
      priority: "low",
    },
    {
      id: "6",
      title: "Schedule Training",
      description: "Plan training sessions for new team members.",
      dueDate: "2025-03",
      isCompleted: false,
      priority: "low",
    },
    {
      id: "7",
      title: "Bug Fixes",
      description: "Fix high-priority bugs reported by QA.",
      dueDate: "2025-01",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "8",
      title: "Budget Review",
      description: "Review budget allocations for upcoming projects.",
      dueDate: "2025-03",
      isCompleted: false,
      priority: "medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
