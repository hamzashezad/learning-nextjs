import Link from 'next/link';

import NavCart from './navCart';

import styles from './navigation.module.css';

export default function Navigation () {
	{/* use `Link` to use client-side navigation */}
	return (
		<nav className="Navigation">
			<NavCart />

			<Link href="/">
				<a>Home</a>
			</Link>

			<Link href="/categories">
				<a>Categories</a>
			</Link>

			<Link href="/products">
				<a>Products</a>
			</Link>

			<Link href="/checkout">
				<a>Checkout</a>
			</Link>
		</nav>
	);
}
