import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice/todoSlice';

const rootReducer = combineReducers({
	todos: todoReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
