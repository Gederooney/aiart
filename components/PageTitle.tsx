import React from "react";
import Image from "next/image";

const PageTitle = ({
	title,
	poster,
	count,
}: {
	title: string;
	poster: string;
	count?: number;
}) => {
	return (
		<div className='w-full h-[200px] relative'>
			<div className='absolute h-full w-full top-0 left-0'>
				<Image
					src={poster}
					width={1200}
					height={1200}
					alt={title}
					className='object-cover object-center h-full w-full'
				/>
			</div>
			<div className='relative h-full w-full bg-black/80 grid place-items-center'>
				<h1 className='text-white text-3xl font-bold'>
					{title}{" "}
					{count ? `(${count} ${count > 1 ? "items" : "item"})` : ""}
				</h1>
			</div>
		</div>
	);
};

export default PageTitle;
