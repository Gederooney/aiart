import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { categories, ICategory } from "@/data/sampleData";
import ImageCard from "@/components/ImageCard";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import AddedToCart from "@/components/AddedToCart";
import PageTitle from "@/components/PageTitle";

interface CategoryPageProps {
	category: ICategory;
	relatedProducts: ICategory[];
}

export function getStaticPaths() {
	let paths: {
		params: {
			slug: string;
		};
	}[] = [];

	Object.entries(categories).forEach(([key, value]) => {
		paths = [
			...paths,
			{
				params: { slug: value.title.replaceAll(" ", "-") },
			},
		];
	});
	return {
		paths,
		fallback: "blocking",
	};
}

export const getStaticProps: GetStaticProps<CategoryPageProps> = async (
	context: GetStaticPropsContext
) => {
	const slug = context.params?.slug as string;
	let category = categories[slug.replaceAll("-", " ")];

	Object.entries(categories).forEach(([key, value]) => {
		if (!category && value.title.replaceAll(" ", "-") === slug)
			category = value;
	});

	if (!category) {
		console.log("Category not found");
		return {
			notFound: true,
		};
	}

	return {
		props: {
			category,
			relatedProducts: [],
		},
	};
};

const CategoryPage = ({
	category,
	relatedProducts,
}: CategoryPageProps & { slug: string }) => {
	const { showConfirmation } = useCart();

	// go back to previous page
	const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
		window.history.back();
	};
	return (
		<main className='container mx-auto'>
			{showConfirmation && <AddedToCart />}
			<section>
				<div>
					<PageTitle
						title={category.title}
						poster={category.poster}
						count={category.products.length}
					/>
					<div>
						<button
							className='flex flex-row text-primary px-4 py-2 rounded-md mt-4 text-sm hover:underline hover:scale-105 transition-all duration-200 ease-in-out'
							onClick={goBack}>
							<svg
								className='h-5 w-5 mr-2'
								clip-rule='evenodd'
								fillRule='evenodd'
								strokeLinejoin='round'
								strokeMiterlimit='2'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z'
									fill-rule='nonzero'
								/>
							</svg>
							<span>Go back</span>
						</button>
					</div>
					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10'>
						{(category.products.length > 0 &&
							category.products.map((image) => (
								<ImageCard
									key={image.id}
									image={image}
								/>
							))) ?? (
							<div className='text-center'>
								<h3 className='text-2xl font-semibold mb-4'>
									No images found
								</h3>
								<p className='text-gray-600 mb-6'>
									{/* Add a description for the image here */}
								</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
};

export default CategoryPage;
