import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../types'

interface TaskState {
  tasks: Task[]
  filter: 'all' | 'active' | 'completed' | 'today' | 'important' | 'planned'
  view: 'list' | 'grid'
}

const initialState: TaskState = {
  tasks: [],
  filter: 'all',
  view: 'list',
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(t => t.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<TaskState['filter']>) => {
      state.filter = action.payload
    },
    setView: (state, action: PayloadAction<TaskState['view']>) => {
      state.view = action.payload
    },
    toggleImportant(state, action: PayloadAction<string>) {
        const task = state.tasks.find((t) => t.id === action.payload);
        if (task) {
          task.important = !task.important;
        }
      },
  },
})

export const { addTask, toggleTask, deleteTask, setFilter, setView,toggleImportant } = taskSlice.actions
export default taskSlice.reducer
