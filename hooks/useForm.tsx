// hooks/useForm.ts
import { useState } from "react";

const useForm = (initialState: any) => {
	const [formData, setFormData] = useState(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return { formData, handleChange };
};

export default useForm;
