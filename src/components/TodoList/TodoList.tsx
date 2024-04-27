import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeTodo } from '../../store/todoSlice/todoSlice';
import cls from './TodoList.module.scss'
import Button from '../Button/Button';

export const TodoList = () => {
	const todos = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch();

	const handleRemoveTodo = (id: number) => {
		dispatch(removeTodo(id));
	};

	return (
		<div className={cls.container}>
			<ul className={cls.list}>
				{todos.map(todo => (
					<li className={cls.list_item} key={todo.id}>
						<div className={cls.info_block}>
							<div>Name: {todo.name};</div>
							<div>Phone: {todo.phone};</div>
							<div>Email: {todo.email};</div>
						</div>
						<Button 
							isPrimary={false} 
							onClick={() => handleRemoveTodo(todo.id)}>
								Delete
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};
