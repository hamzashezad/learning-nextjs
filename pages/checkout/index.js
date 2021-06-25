// this page should have a shared cart store
// shows a list of all items in cart, checkout options

import Layout from '../../components/layout';
import Cart from '../../components/cart';
import CheckoutButton from '../../components/checkoutButton';

export default function Checkout() {
	return (
		<Layout>
			<h1>Checkout</h1>

			<Cart />

			<CheckoutButton />
		</Layout>
	);
}
