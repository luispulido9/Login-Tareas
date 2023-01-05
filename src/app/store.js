import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/task/taskSlice';

// REDUCER ACTUALIZAR ESTADO / OPERACIONES
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
