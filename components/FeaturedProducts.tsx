import React from "react";
import { featuredProducts } from "@/data/sampleData";
import ImageCard from "./ImageCard";
import { ImageData } from "@/data/sampleData";

const FeaturedProducts = ({
	products,
	title,
}: {
	products: ImageData[];
	title?: string;
}) => {
	return (
		<section className=''>
			<div>
				<h2 className='text-3xl font-bold my-10 text-left'>
					{title ?? "Featured Products"}
				</h2>
			</div>
			<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{products.map((image) => (
					<ImageCard
						key={image.id}
						image={image}
					/>
				)) ?? (
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
		</section>
	);
};

export default FeaturedProducts;
