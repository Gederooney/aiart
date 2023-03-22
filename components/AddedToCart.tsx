import React from "react";
import { useCart } from "@/contexts/CartContext";
const AddedToCart = () => {
	const { closeConfirmation } = useCart();
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center'>
			<div className='bg-white p-8 rounded-md'>
				<h2 className='text-2xl font-semibold mb-4'>Added to Cart!</h2>
				<p className='mb-4'>Your item has been added to your cart.</p>
				<button
					className='bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-1 px-3 border border-gray-800 rounded'
					onClick={() => {
						closeConfirmation();
					}}>
					Continue Shopping
				</button>
			</div>
		</div>
	);
};

export default AddedToCart;
