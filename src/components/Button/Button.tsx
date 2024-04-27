import React, { ReactNode } from 'react';
import cls from './Button.module.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  isPrimary: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<Partial<ButtonProps>> = React.memo(({ type = 'button', isPrimary = true, onClick, children }) => {

	// Устанавливается класс в зависимости от значения isPrimary
	const buttonClass = isPrimary ? cls.primary : cls.secondary;

	return (
		<button 
			type={type}
			className={buttonClass}
			onClick={onClick}
		>
			{children}
		</button>
	);
}, (prevProps, nextProps) => {

	// Возвращается true, если isPrimary не изменился
	return prevProps.isPrimary === nextProps.isPrimary;
});

export default Button;
