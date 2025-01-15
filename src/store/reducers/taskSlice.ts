import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskState } from '../../types';

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
  view: 'list',
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    setPriority: (state, action: PayloadAction<{ id: string; priority: Task['priority'] }>) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) {
        task.priority = action.payload.priority;
      }
    },
    setView: (state, action: PayloadAction<TaskState['view']>) => {
      state.view = action.payload;
    },
    setFilter: (state, action: PayloadAction<TaskState['filter']>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  setPriority,
  setView,
  setFilter,
} = taskSlice.actions;
export default taskSlice.reducer;

