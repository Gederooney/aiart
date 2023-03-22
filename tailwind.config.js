module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				md: "2rem",
				lg: "4rem",
				xl: "5rem",
			},
		},
		extend: {
			backgroundImage: {
				"hero-pattern":
					'url("/products/interstellar_wallpaper_for_computer_background_high_re_e5827373-34a1-4a6d-8611-b0a98a675d06.png")',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
