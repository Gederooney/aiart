import React from "react";
import HomeCategories from "@/components/HomeCategories";
import PageTitle from "@/components/PageTitle";

const index = () => {
	return (
		<main className='container mx-auto'>
			<PageTitle
				title='Categories'
				poster='/products/detailed_8k_ultra_realistic_ultra_detailed__cyberpunk__deb1ec90-afe7-4ec5-9bd3-ee15a72084ff.png'
			/>
			<HomeCategories />
		</main>
	);
};

export default index;
