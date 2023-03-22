import React from "react";
import { categories } from "@/data/sampleData";
import Image from "next/image";

function HomeCategories() {
	return (
		<section>
			<div className=''>
				<div>
					<h2 className='text-3xl font-bold my-10 text-left'>
						SHOP BY CATEGORY
					</h2>
				</div>
				<div className='grid grid-cols-1 auto-rows-[300px] md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
					{Object.entries(categories).map(([key, value]) => (
						<a
							className='block w-full h-full border-2 border-gray-200'
							key={key}
							href={`/categories/${value.title.replaceAll(
								" ",
								"-"
							)}`}>
							<div className='relative h-full w-full'>
								<Image
									src={`${value.poster}`}
									width={200}
									height={200}
									alt={value.title}
									className='object-cover h-full w-full'
								/>
								<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-75 transition-all ease-in-out duration-300'>
									<h2 className='text-2xl font-semibold text-white'>
										{value.title}
									</h2>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default HomeCategories;
