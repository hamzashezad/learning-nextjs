import { CartProvider } from '../contexts/cart';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
	if (typeof window != 'undefined') {
		if (window.localStorage.length <= 0) {
			window.localStorage.setItem('cart', JSON.stringify([]));
			window.localStorage.setItem('numItems', 0);
			window.localStorage.setItem('cost', 0);
		}
	}

	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	);
}
