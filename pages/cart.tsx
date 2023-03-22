import Image from "next/image";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import FeaturedProducts from "@/components/FeaturedProducts";
import { featuredProducts } from "@/data/sampleData";

const Cart: React.FC = () => {
	const { cartItems, removeFromCart } = useCart();

	if (cartItems.length === 0) {
		return (
			<main className='container mx-auto'>
				<div className='flex items-center justify-center h-40'>
					<h1 className='text-2xl font-semibold'>
						Your cart is empty.
					</h1>
				</div>
				<FeaturedProducts products={featuredProducts} />
			</main>
		);
	}

	return (
		<main className='container mx-auto py-12'>
			<h1 className='text-3xl font-semibold mb-8'>Shopping Cart</h1>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5'>
				{cartItems.map((item) => (
					<div
						key={item.id}
						className='bg-gray-100 border border-gray-300 shadow-lg rounded-lg p-2 relative'>
						<Image
							className='w-48 h-48 mx-auto mb-4 object-cover'
							src={item.imageUrl}
							alt={item.title}
							width={item.width}
							height={item.height}
						/>
						<div className='font-semibold'>{item.title}</div>
						<div className='text-gray-800'>${item.price}</div>
						<button
							className='absolute top-2 right-2 text-gray-600 bg-red-600 hover:text-red-600 hover:bg-black rounded-full'
							onClick={() => removeFromCart(item.id)}>
							<FiX size={24} />
						</button>
					</div>
				))}
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					Total: $
					{cartItems
						.reduce((total, item) => total + item.price, 0)
						.toFixed(2)}
				</h2>
				<Link
					href='/checkout'
					className='bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-1 px-3 border border-gray-800 rounded'>
					Proceed to Checkout
				</Link>
			</div>
		</main>
	);
};

export default Cart;
