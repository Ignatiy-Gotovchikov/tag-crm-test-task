import Form from "./components/Form/Form"
import cls from './App.module.scss'

export const App = () => {
	return (
		<div className={cls.app_container}>
			<h1 className={cls.title}>Todo List</h1>
			<Form />
		</div>
	)
}