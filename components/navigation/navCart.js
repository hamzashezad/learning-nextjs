import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';

export default function NavCart() {
	const [
		cart, setCart,
		numItems, setNumItems,
		cost, setCost
	] = useContext(CartContext);

	return <article>{ numItems } items (£{ cost / 100 })</article>;
}
