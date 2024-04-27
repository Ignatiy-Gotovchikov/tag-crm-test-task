import useFormFields from '../../customHooks/useFormFields/useFormFields';
import { TodoList } from '../TodoList/TodoList';
import { useDispatch, useSelector} from 'react-redux';
import { addTodo } from '../../store/todoSlice/todoSlice';
import cls from "./Form.module.scss"
import Button from '../Button/Button';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { RootState } from '../../store/store';

export interface Todo {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const Form = () => {
	const dispatch = useDispatch()
	const {fields, handleChange, clearForm} = useFormFields();
	const [errorMessage, setErrorMessage] = useState('');

	const selectAllEmails = (state: RootState) =>
		state.todos.map(todo => todo.email);

	const allEmails = useSelector((state: RootState) => selectAllEmails(state));

	const addTodoInList = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!fields.name || !fields.phone || !fields.email) {
			setErrorMessage('Please fill in all fields.'); 
			return;
		}

		// Проверка на наличие имейла в списке
		if (allEmails.includes(fields.email)) {
			setErrorMessage('Email already exists.');
			return;
		}

		dispatch(addTodo({
			name: fields.name,
			phone: fields.phone,
			email: fields.email,
		}));

		clearForm();
		setErrorMessage('');
	};

	const handleResetFields = () => {
		clearForm();
		setErrorMessage('');
	}


	return (
		<>
			{errorMessage && 
				<ErrorMessage 
					onClose={() => setErrorMessage('')}
					message={errorMessage} 
				/>}

			<form onSubmit={addTodoInList}>
				<legend className={cls.legend}>Enter sth</legend>
				<fieldset className={cls.fieldset}>
					<input
						className={cls.form_input}
						value={fields.name} 
						onChange={handleChange} 
						type='text' 
						name='name'
						placeholder='Name' />

					<input         
						className={cls.form_input}
						value={fields.phone}
						onChange={handleChange} 
						type='phone' 
						name='phone'
						placeholder='Phone' />

					<input 			
						className={cls.form_input}
						value={fields.email}
						onChange={handleChange}  
						type='email' 
						name='email'
						placeholder='Email' />
				
					<Button isPrimary={true} type="submit">Submit</Button>

					<Button 
						isPrimary={false} 
						onClick={handleResetFields} 
						type='reset'>
							Reset
					</Button>
				</fieldset>
			</form>

			<TodoList />
		</>
	);
};

export default Form;
