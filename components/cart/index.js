import { useContext, useEffect, useState } from 'react';

import { CartContext } from '../../contexts/cart';

export function Cart() {
	const [cart, setCart, numItems, setNumItems] = useContext(CartContext);

	if (numItems <= 0) {
		return <p>No items in your cart</p>;
	}

	return (
		<ol>
			{ cart.map((item, i) => (
				<li key={i}>{ item.title } ({ item.quantity })</li>
			)) }
		</ol>
	);
};

export function NavCart() {
	const [cart, setCart, numItems, setNumItems] = useContext(CartContext);

	return <article>{ numItems } items</article>;
}

export function AddToCart(item) {
	const [cart, setCart, numItems, setNumItems] = useContext(CartContext);

	const add = ({ item }) => {
		setNumItems((num) => num + 1);

		setCart((items) => {
			const found = items.findIndex((element) => element.title == item.title);

			if (found === -1) {
				item.quantity += 1;

				return [...items, item];
			}

			items[found].quantity += 1;

			return items;
		});
	};

	return (
		<button onClick={() => add(item)}>
			Add to cart
		</button>
	);
}
