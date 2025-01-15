import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import taskReducer from './taskSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
});

