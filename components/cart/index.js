import { useContext, useEffect, useState } from 'react';

import { CartContext } from '../../contexts/cart';

export function Cart() {
	const [
		cart, setCart,
		numItems, setNumItems,
		cost, setCost
	] = useContext(CartContext);

	if (numItems <= 0) {
		return <p>No items in your cart</p>;
	}

	return (
		<>
			<ol>
				{ cart.map((item, i) => (
					<li key={i}>{ item.name } ({ item.quantity })</li>
				)) }
			</ol>
			<article><strong>Total:</strong> £{ cost }</article>
		</>
	);
};

export function NavCart() {
	const [
		cart, setCart,
		numItems, setNumItems,
		cost, setCost
	] = useContext(CartContext);

	return <article>{ numItems } items (£{ cost })</article>;
}

export function AddToCart(item) {
	const [
		cart, setCart,
		numItems, setNumItems,
		cost, setCost
	] = useContext(CartContext);

	const add = ({ item }) => {
		setNumItems((num) => Number.parseInt(num) + 1);

		setCost((c) => +Number.parseFloat(parseFloat(c) + item.price).toFixed(2));

		setCart((items) => {
			const found = items.findIndex((element) => element.id == item.id);

			if (found === -1) {
				item.quantity += 1;

				return [...items, item];
			}

			items[found].quantity += 1;

			return items;
		});
	};

	useEffect(() => {
		if (typeof window != 'undefined') {
			window.localStorage.setItem('cart', JSON.stringify(cart));
			window.localStorage.setItem('numItems', JSON.stringify(numItems));
			window.localStorage.setItem('cost', JSON.stringify(cost));
		}
	}, [cart, cost, numItems]);

	return (
		<button onClick={() => add(item)}>
			Add to cart
		</button>
	);
}
