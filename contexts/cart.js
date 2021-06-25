import { useEffect, useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
	const [numItems, setNumItems] = useState(0);
	const [cost, setCost] = useState(0);

	useEffect(() => {
		if (typeof window != 'undefined') {
			const storedCart = window.localStorage.getItem('cart');

			if (storedCart !== null) {
				setCart(JSON.parse(storedCart));
			}

			const storedNumItems = window.localStorage.getItem('numItems')

			if (storedNumItems !== null) {
				setNumItems(Number.parseInt(storedNumItems));
			}

			const storedCost = window.localStorage.getItem('cost')

			if (storedCost !== null) {
				setCost(Number.parseInt(storedCost));
			}
		}
	}, []);

	return (
		<CartContext.Provider value={[
			cart, setCart,
			numItems, setNumItems,
			cost, setCost
		]} >
			{ props.children }
		</CartContext.Provider>
	);
};
