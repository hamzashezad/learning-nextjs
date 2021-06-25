import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';

import getStripe from '../../utils/getStripe';

export default function CheckoutButton() {
	const [
		cart, setCart,
		numItems, setNumItems,
		cost, setCost
	] = useContext(CartContext);

	async function handleCheckout(event) {
		event.preventDefault();

		const data = cart.map((p) => ({
			id: p.id,
			quantity: p.quantity
		}));

		try {
			const response = await fetch('/.netlify/functions/create-checkout', {
				method: 'post',

				headers: {
					'Content-Type': 'application/json'
				},

				body: JSON.stringify(data)
			});

			const json = await response.json();

			const stripe = await getStripe();
			const { error } = await stripe.redirectToCheckout({
				sessionId: json.sessionId
			});

			if (error) {
				console.error(error);
			}
		} catch (err) {
			console.error(err);
		}
	}

	return <button onClick={handleCheckout}>Checkout</button>
}
