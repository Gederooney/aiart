import { createContext, useContext, useState, useEffect } from "react";
import { ImageData } from "../data/sampleData";

interface CartItem extends ImageData {
	quantity: number;
}

interface CartContextData {
	cartItems: CartItem[];
	addToCart: (item: ImageData) => void;
	removeFromCart: (itemId: number) => void;
	updateQuantity: (itemId: number, quantity: number) => void;
	clearCart: () => void;
	showConfirmation: boolean;
	closeConfirmation: () => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

interface CartProviderProps {
	children: React.ReactNode;
}

const isBrowser = (): boolean => typeof window !== "undefined";

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

	useEffect(() => {
		if (!isBrowser()) return;

		const savedCart = localStorage.getItem("cart");
		if (savedCart) {
			setCartItems(JSON.parse(savedCart));
		}
	}, []);

	const saveCart = (newCartItems: ImageData[]) => {
		localStorage.setItem("cart", JSON.stringify(newCartItems));
	};

	const addToCart = (item: ImageData) => {
		const itemExists = cartItems.find(
			(cartItem) => cartItem.id === item.id
		);

		if (itemExists) {
			return;
		} else {
			setCartItems((prevCartItems) => {
				const updatedCartItems = [
					...prevCartItems,
					{ ...item, quantity: 1 },
				];
				saveCart(updatedCartItems);
				return updatedCartItems;
			});
		}
		showConfirmationMessage();
	};

	const removeFromCart = (itemId: number) => {
		const newCartItems = cartItems.filter((item) => item.id !== itemId);
		setCartItems(newCartItems);
		saveCart(newCartItems);
	};

	const updateQuantity = (itemId: number, newQuantity: number) => {
		const newCartItems = cartItems.map((item) =>
			item.id === itemId ? { ...item, quantity: newQuantity } : item
		);
		setCartItems(newCartItems);
		saveCart(newCartItems);
	};
	const clearCart = () => {
		setCartItems([]);
		saveCart([]);
	};

	const showConfirmationMessage = () => {
		setShowConfirmation(true);
		setTimeout(() => {
			setShowConfirmation(false);
		}, 2000);
	};

	const closeConfirmation = () => {
		setShowConfirmation(false);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				showConfirmation,
				closeConfirmation,
			}}>
			{children}
		</CartContext.Provider>
	);
};
