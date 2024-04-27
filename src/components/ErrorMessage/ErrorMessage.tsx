import cls from './ErrorMessage.module.scss'

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps>= ({ message, onClose }: ErrorMessageProps) => {
	return (
		<div className={cls.modal}>
			<div className={cls.content_container}>
				<p className={cls.error_message_text}>{message}</p>
				<button className={cls.close_btn} onClick={onClose}>
					<span style={{ fontSize: '20px' }}>✕</span>
				</button>
			</div>
		</div>
	);
};

export default ErrorMessage;