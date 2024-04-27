import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../components/Form/Form";

export const todoSlice = createSlice({
	name: "todos",
	initialState: [
		{ id: 1, name: 'name1', phone: 'phone1', email: 'email1@gmail.com' },
		{ id: 2, name: 'name2', phone: 'phone2', email: 'email2@gmail.com' },
		{ id: 3, name: 'name3', phone: 'phone3', email: 'email3@gmail.com' },
	],
	reducers: {
		addTodo: (state, action) => {
			const newTodo: Todo = {
				id: Date.now(),
				name: action.payload.name,
				phone: action.payload.phone,
				email: action.payload.email,
			};
			state.push(newTodo);
		},
		removeTodo: (state, action) => {
			const idToRemove = action.payload;
			return state.filter(todo => todo.id !== idToRemove); 
		}
	}
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo } = todoSlice.actions;
