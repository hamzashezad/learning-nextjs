import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
	const [numItems, setNumItems] = useState(0);

	return (
		<CartContext.Provider value={[ cart, setCart, numItems, setNumItems ]} >
			{ props.children }
		</CartContext.Provider>
	);
};
