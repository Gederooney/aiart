import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";

const CartIcon = () => {
	const { cartItems } = useCart();

	const cartItemsCount = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

	return (
		<div className='relative mr-5'>
			<Link
				href='/cart'
				title='Cart'
				className='relative w-6 h-6'>
				<FiShoppingCart className='text-inherit text-2xl hover:text-blue-300 h-4 w-4' />

				<span className='absolute w-full h-full text-xs text-inherit font-semibold top-0 -right-4'>
					({cartItemsCount})
				</span>
			</Link>
		</div>
	);
};

export default CartIcon;
