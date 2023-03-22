import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { images, ImageData, categories } from "../../data/sampleData";
import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "@/components/FeaturedProducts";
import PageTitle from "@/components/PageTitle";

interface ProductDetailProps {
	image: ImageData;
	relatedImages: ImageData[];
}

export const getStaticProps: GetStaticProps<ProductDetailProps> = async (
	context: GetStaticPropsContext
) => {
	const id = parseInt(context.params?.id as string);
	let image: ImageData | undefined = undefined;

	Object.entries(categories).forEach(([key, value]) => {
		if (!image) image = value.products.find((img) => img.id === id);
	});

	if (!image) {
		console.log("Image not found");
		return {
			notFound: true,
		};
	}

	// Fetch related images (you can customize the logic to fetch related images)
	const relatedImages = images
		.filter((img) => img.id !== id)
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);

	return {
		props: {
			image,
			relatedImages,
		},
	};
};

export const getStaticPaths: GetStaticPaths<{
	id: string;
}> = async () => {
	let paths: {
		params: {
			id: string;
		};
	}[] = [];

	Object.entries(categories).forEach(([key, value]) => {
		paths = [
			...paths,
			...value.products.map((image) => ({
				params: { id: image.id.toString() },
			})),
		];
	});

	return {
		paths,
		fallback: false,
	};
};

const ProductDetail: React.FC<ProductDetailProps> = ({
	image,
	relatedImages,
}) => {
	return (
		<main className='container'>
			<PageTitle
				title={image.title}
				poster={image.imageUrl}
			/>
			<div className='container mx-auto px-4 py-12'>
				<div className='flex flex-wrap md:flex-nowrap'>
					<div className='w-full md:w-1/2 mb-8 md:mb-0 md:pr-8'>
						<Image
							src={image.imageUrl}
							alt={image.title}
							width={image.width}
							height={image.height}
							className='object-cover w-full h-full rounded-md'
						/>
					</div>
					<div className='w-full md:w-1/2'>
						<h1 className='text-3xl font-semibold mb-4'>
							{image.title}
						</h1>
						<p className='text-xl font-medium text-gray-700 mb-6'>
							${image.price}
						</p>
						<p className='text-gray-600 mb-6'>
							{/* Add a description for the image here */}
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Fusce auctor lectus eget orci pharetra, nec
							tincidunt enim tempus.
						</p>
						<button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
			<FeaturedProducts
				products={relatedImages}
				title='You may also like'
			/>
		</main>
	);
};

export default ProductDetail;
