import React from "react";
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					href='/logo.svg'
					type='image/svg'
				/>
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
