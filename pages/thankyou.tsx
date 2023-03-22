import Link from "next/link";
import Layout from "../components/Layout";

const ThankYou = () => {
	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-2xl font-bold mb-4'>
				Thank you for your purchase!
			</h1>
			<p className='mb-4'>Your order has been placed successfully.</p>
			<Link href='/'>
				<a className='text-blue-500 hover:text-blue-600'>
					Go back to the home page
				</a>
			</Link>
		</div>
	);
};

export default ThankYou;
