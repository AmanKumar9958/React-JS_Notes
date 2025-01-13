import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/ToDo/toDoSlice';

const store = configureStore({
    reducer: {
        todo: toDoReducer
    }
});

export default store;