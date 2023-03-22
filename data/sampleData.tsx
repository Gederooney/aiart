export interface ImageData {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
	width: number;
	height: number;
}

export interface ICategory {
	products: ImageData[];
	poster: string;
	title: string;
}

export interface ICategories {
	[key: string]: ICategory;
}

export const images: ImageData[] = [
	{
		id: 1,
		title: "Developer Coding Art",
		imageUrl: "/products/coding-art.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 2,
		title: "Old Man Sitting in Hot Rod in Dusty Garage I",
		imageUrl:
			"/products/old_man_sitting_in_hot_rod_in_dusty_garage_f0219cb3-0111-4418-b2ca-40717823678c.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 3,
		title: "Old Man Sitting in Hot Rod in Dusty Garage II",
		imageUrl:
			"/products/ryebadok_old_man_sitting_in_hot_rod_in_dusty_garage_a237e8fc-dccf-4d9e-ab82-0005aaaa2149.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 4,
		title: "Old Man Sitting in Hot Rod in Dusty Garage III",
		imageUrl:
			"/products/old_man_sitting_in_hot_rod_in_dusty_garage_7256cff3-00e3-4dc8-8bf8-42d6757f7f02.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 5,
		title: "capybara in a pink egg with a coin modern minaliste I",
		imageUrl:
			"/products/capybara_in_a_pink_egg_with_a_coin_modern_minaliste_co_b495c210-6b70-4647-a217-d10fc19886f7.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 6,
		title: "capybara in a pink egg with a coin modern minaliste II",
		imageUrl:
			"/products/capybara_in_a_pink_egg_with_a_coin_modern_minaliste_co_c755cea6-35b3-4fb6-8e95-9ca4df167fc4.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 7,
		title: "interstellar wallpaper for computer background",
		imageUrl:
			"/products/interstellar_wallpaper_for_computer_background_high_re_e5827373-34a1-4a6d-8611-b0a98a675d06.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 8,
		title: "a woman riding a red vintage bike on a road that leads to Effel Tower I",
		imageUrl:
			"/products/ryebadok_a_woman_riding_a_red_vintage_bike_on_a_road_that_leads_cbbbf0b1-a319-4e94-8f87-dad20aa3f923.png",
		width: 800,
		height: 600,
		price: 0.99,
	},
	{
		id: 9,
		title: "a woman riding a red vintage bike on a road that leads to Effel Tower II",
		imageUrl:
			"/products/ryebadok_a_woman_riding_a_red_vintage_bike_on_a_road_that_leads_c621e9c5-8e53-4b49-b4f1-3be24a547684.png",
		width: 800,
		height: 600,
		price: 0.99,
	},
];

export const categories: ICategories = {
	electronics: {
		products: [
			{
				id: 10,
				title: "ultra detailed cyberpunk",
				imageUrl:
					"/products/detailed_8k_ultra_realistic_ultra_detailed__cyberpunk__deb1ec90-afe7-4ec5-9bd3-ee15a72084ff.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 11,
				title: "ultra detailed cyberpunk II",
				imageUrl:
					"/products/detailed_8k_ultra_realistic_ultra_detailed__cyberpunk__267db285-81e4-4df4-88ba-d8408e167c40.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 12,
				title: "ultra detailed cyberpunk II",
				imageUrl:
					"/products/detailed_8k_ultra_realistic_ultra_detailed__cyberpunk__5e70c95e-f012-4e77-b84d-e541486a9d61.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 13,
				title: "ultra detailed cyberpunk II",
				imageUrl:
					"/products/detailed_8k_ultra_realistic_ultra_detailed__cyberpunk__e04788ce-9159-4ce7-86dc-f750ebb5f3d4.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
		],
		title: "Electronics",
		poster: "/products/detailed_8k_ultra_realistic_ultra_detailed__cyberpunk__deb1ec90-afe7-4ec5-9bd3-ee15a72084ff.png",
	},
	creative: {
		products: [
			{
				id: 5,
				title: "capybara in a pink egg with a coin modern minaliste I",
				imageUrl:
					"/products/capybara_in_a_pink_egg_with_a_coin_modern_minaliste_co_b495c210-6b70-4647-a217-d10fc19886f7.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 6,
				title: "capybara in a pink egg with a coin modern minaliste II",
				imageUrl:
					"/products/capybara_in_a_pink_egg_with_a_coin_modern_minaliste_co_c755cea6-35b3-4fb6-8e95-9ca4df167fc4.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
		],
		title: "Creative",
		poster: "/products/capybara_in_a_pink_egg_with_a_coin_modern_minaliste_co_c755cea6-35b3-4fb6-8e95-9ca4df167fc4.png",
	},
	animal: {
		products: [
			{
				id: 14,
				title: "cute pest butterfly character concept cartoon",
				imageUrl:
					"/products/cute_pest_butterfly_character_concept_cartoon_style_ul_d3dcdad0-4900-4917-bc25-d2c45d382aa1.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 15,
				title: "cute pest butterfly character concept cartoon",
				imageUrl:
					"/products/cute_pest_butterfly_character_concept_cartoon_style_ul_ae2c778e-fc40-4e98-910c-9ef4c0d5a6a7.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 16,
				title: "cute pest butterfly character concept cartoon",
				imageUrl:
					"/products/cute_pest_butterfly_character_concept_cartoon_style_ul_47830103-42c7-4147-8a24-32d90442fc39.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 16,
				title: "cute pest butterfly character concept cartoon",
				imageUrl:
					"/products/cute_pest_butterfly_character_concept_cartoon_style_ul_9bc37a90-86b5-42d9-a8fe-4a8cb32d56dd.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
		],
		title: "Animal",
		poster: "/products/cute_pest_butterfly_character_concept_cartoon_style_ul_d3dcdad0-4900-4917-bc25-d2c45d382aa1.png",
	},
	coders: {
		products: [
			{
				id: 1,
				title: "Developer Coding Art",
				imageUrl: "/products/coding-art.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
		],
		title: "Coders",
		poster: "/products/coding-art.png",
	},
	"wall papers": {
		products: [
			{
				id: 9,
				title: "a woman riding a red vintage bike on a road that leads to Effel Tower II",
				imageUrl:
					"/products/ryebadok_a_woman_riding_a_red_vintage_bike_on_a_road_that_leads_c621e9c5-8e53-4b49-b4f1-3be24a547684.png",
				width: 800,
				height: 600,
				price: 0.99,
			},
			{
				id: 2,
				title: "Old Man Sitting in Hot Rod in Dusty Garage I",
				imageUrl:
					"/products/old_man_sitting_in_hot_rod_in_dusty_garage_f0219cb3-0111-4418-b2ca-40717823678c.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 3,
				title: "Old Man Sitting in Hot Rod in Dusty Garage II",
				imageUrl:
					"/products/ryebadok_old_man_sitting_in_hot_rod_in_dusty_garage_a237e8fc-dccf-4d9e-ab82-0005aaaa2149.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 4,
				title: "Old Man Sitting in Hot Rod in Dusty Garage III",
				imageUrl:
					"/products/old_man_sitting_in_hot_rod_in_dusty_garage_7256cff3-00e3-4dc8-8bf8-42d6757f7f02.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 8,
				title: "a woman riding a red vintage bike on a road that leads to Effel Tower I",
				imageUrl:
					"/products/ryebadok_a_woman_riding_a_red_vintage_bike_on_a_road_that_leads_cbbbf0b1-a319-4e94-8f87-dad20aa3f923.png",
				width: 800,
				height: 600,
				price: 0.99,
			},
		],
		title: "Wall Papers",
		poster: "/products/old_man_sitting_in_hot_rod_in_dusty_garage_f0219cb3-0111-4418-b2ca-40717823678c.png",
	},

	Spatial: {
		products: [
			{
				id: 7,
				title: "interstellar wallpaper for computer background",
				imageUrl:
					"/products/interstellar_wallpaper_for_computer_background_high_re_e5827373-34a1-4a6d-8611-b0a98a675d06.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
			{
				id: 1679501365130,
				title: "Developer Coding Art",
				imageUrl:
					"/products/the_sun_getting_eaten_by_the_moon_in_an_apocalyptic_la_e0fe46b1-7c60-43cc-a54d-bc4fb5cb5da9.png",
				price: 0.99,
				width: 800,
				height: 600,
			},
		],
		title: "Spatial",
		poster: "/products/interstellar_wallpaper_for_computer_background_high_re_e5827373-34a1-4a6d-8611-b0a98a675d06.png",
	},
};

export const featuredProducts: ImageData[] = [
	{
		id: 1679501365130,
		title: "Developer Coding Art",
		imageUrl:
			"/products/the_sun_getting_eaten_by_the_moon_in_an_apocalyptic_la_e0fe46b1-7c60-43cc-a54d-bc4fb5cb5da9.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 1,
		title: "Developer Coding Art",
		imageUrl: "/products/coding-art.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 7,
		title: "A young african black woman",
		imageUrl:
			"/products/a_young_african_woman_with_long_wavy_chestnut_hair_and_e89e320f-7166-446b-92c3-ed47171349a3.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 10,
		title: "ultra detailed cyberpunk",
		imageUrl:
			"/products/detailed_8k_ultra_realistic_ultra_detailed__cyberpunk__deb1ec90-afe7-4ec5-9bd3-ee15a72084ff.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
];

export const featuredCollections = [];

export const newProducts = [
	{
		id: 1,
		title: "African village",
		imageUrl: "/products/african_village.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
	{
		id: 2,
		title: "Old african male model",
		imageUrl: "/products/Old_african_male_model.png",
		price: 0.99,
		width: 800,
		height: 600,
	},
];
