import Link from 'next/link';

import { getProducts } from '../../lib/products';

import Layout from '../../components/layout';

// standard nextjs function
export async function getStaticProps() {
	return {
		props: {
			products: await getProducts()
		}
	};
}

export default function Products({ products }) {
	return (
		<Layout>
			<h1>Products</h1>
			<ol>
				{products.map(({id, name, price}, i) => (
					<li key={i}>
						<Link href={'/products/' + id}>
							<a>{name}</a>
						</Link>, £{price}
					</li>
				))}
			</ol>
		</Layout>
	);
}
