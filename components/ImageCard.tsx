import Link from "next/link";
import Image from "next/image";
import { ImageData } from "../data/sampleData";
import { useCart } from "../contexts/CartContext";

interface ImageCardProps {
	image: ImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
	const { addToCart } = useCart();

	function toTitleCase(str: string) {
		return str.replace(/\w\S*/g, function (word) {
			return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
		});
	}

	return (
		<div className='bg-gray-100/10 border border-gray-300 p-4 rounded-md'>
			<Link href={`/product/${image.id}`}>
				<div className='w-full h-64 relative mb-2 rounded-md overflow-hidden'>
					<Image
						src={image.imageUrl}
						alt={image.title}
						height={image.height}
						width={image.width}
						className='object-cover h-full w-full'
					/>
				</div>
				<h2 className='text-black text-base font-medium mb-1 leading-tighter tracking-tight'>
					{image.title.toUpperCase()}
				</h2>
			</Link>
			<div className='flex flex-row justify-between'>
				<p className='text-black font-semibold opacity-50'>
					${image.price}
				</p>
				<button
					onClick={() => {
						addToCart(image);
					}}
					className='bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-1 px-3 border border-gray-800 rounded'>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ImageCard;
