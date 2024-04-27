import { useState } from 'react';

export interface FormFields {
  name: string;
  phone: string;
  email: string;
}

const initialState: FormFields = {
	name: "",
	phone: "",
	email: "",
};

const useFormFields = () => {
	const [fields, setFields] = useState<FormFields>(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fieldName = e.target.name;
		setFields({ ...fields, [fieldName]: e.target.value });
	};

	const clearForm = () => {
		setFields(initialState);
	};


	return { fields, handleChange, clearForm };
};

export default useFormFields;
