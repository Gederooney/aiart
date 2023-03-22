// pages/checkout.tsx
import { useState } from "react";
import useForm from "../hooks/useForm";
import { useCart } from "@/contexts/CartContext";

const Checkout = () => {
	const { cartItems } = useCart();
	const initialState = {
		name: "",
		email: "",
	};

	const { formData, handleChange } = useForm(initialState);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Process the form data here
		console.log(formData);
	};

	return (
		<main className='container mx-auto px-4 py-12 max-w-sm border border-primary/10 mt-10'>
			<h1 className='text-3xl font-semibold mb-8'>Checkout</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label
						htmlFor='name'
						className='block mb-1 text-sm'>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						className='w-full px-2 py-1 border rounded-md text-sm'
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block mb-1 text-sm'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						className='w-full px-2 py-1 border rounded-md text-sm'
					/>
				</div>

				<button
					type='submit'
					className='bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600'>
					Place Order
				</button>
			</form>
		</main>
	);
};

export default Checkout;
