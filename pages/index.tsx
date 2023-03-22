import { useCart } from "@/contexts/CartContext";
import Head from "next/head";
import Hero from "@/components/Hero";
import HomeCategories from "@/components/HomeCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AddedToCart from "@/components/AddedToCart";
import { featuredProducts, newProducts } from "@/data/sampleData";

const Home: React.FC = () => {
	const { showConfirmation } = useCart();

	return (
		<div className='container'>
			<Head>
				<title>AI Art Gallery</title>
				<meta
					name='description'
					content='AI generated art for sale'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			{showConfirmation && <AddedToCart />}

			<main className='container mx-auto px-4 pb-16'>
				<Hero />
				<FeaturedProducts
					products={newProducts}
					title='New IN'
				/>
				<HomeCategories />
				<FeaturedProducts products={featuredProducts} />
			</main>
		</div>
	);
};

export default Home;
