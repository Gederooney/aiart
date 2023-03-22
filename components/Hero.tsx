import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<div className='bg-[url("/products/interstellar_wallpaper_for_computer_background_high_re_e5827373-34a1-4a6d-8611-b0a98a675d06.png")] bg-cover bg-center py-40'>
			<div className='container mx-auto px-4 text-center'>
				<h1 className='text-5xl font-bold text-white mb-4'>
					AI Art Gallery
				</h1>
				<p className='text-2xl text-white mb-8'>
					Discover and buy amazing AI-generated art!
				</p>
				<Link
					href='/categories'
					title='Explore Artworks'
					className='bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-1 px-3 border border-gray-800 rounded'>
					Explore Artworks
				</Link>
			</div>
		</div>
	);
};

export default Hero;
