import { CartProvider } from '../contexts/cart';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	);
}
