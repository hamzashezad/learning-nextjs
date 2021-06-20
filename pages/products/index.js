import Link from 'next/link';

import { getAllProductData } from '../../lib/products';

import Layout from '../../components/layout';

// standard nextjs function
export async function getStaticProps() {
	return {
		props: {
			products: getAllProductData()
		}
	};
}

export default function Products({ products }) {
	return (
		<Layout>
			<h1>Products</h1>
			<ol>
				{products.map(({id, title}, i) => (
					<li key={i}>
						<Link href={'/products/' + id}>
							<a>{title}</a>
						</Link>
					</li>
				))}
			</ol>
		</Layout>
	);
}
