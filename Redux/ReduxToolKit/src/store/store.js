import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/ToDo/toDoSlice';

export const store = configureStore({
    reducer: toDoReducer
});