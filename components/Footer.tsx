const Footer = () => {
	return (
		<footer className='bg-gray-800 py-4 mt-10'>
			<div className='container mx-auto px-4 text-white text-sm font-light text-center'>
				&copy; {new Date().getFullYear()} AI Art Store. All rights
				reserved. Made with ❤️ by{" "}
				<a
					href='https://ronygedeon.com'
					target='_blank'
					className='text-white font-semibold hover:underline'>
					Rony Gedeon
				</a>
			</div>
		</footer>
	);
};

export default Footer;
