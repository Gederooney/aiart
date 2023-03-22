import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { CartProvider, useCart } from "../contexts/CartContext";
import Layout from "@/components/Layout";

function App({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartProvider>
	);
}

export default App;
