import { getProductIds, getProductData } from '../../lib/products';

import Layout from '../../components/layout';
import { AddToCart } from '../../components/cart';

// standard nextjs function
export async function getStaticPaths() {
	const paths = getProductIds();

	return {
		paths,
		fallback: false
	};
}

// standard nextjs function
export async function getStaticProps(props) {
	const data = await getProductData(props.params.id);

	data.quantity = 0;

	return {
		props: {
			data,
		}
	};
}

export default function Product({ data }) {
	return (
		<Layout>
			<h1>{ data.title }</h1>
			<article dangerouslySetInnerHTML={{ __html: data.content }} />

			<AddToCart item={data} />
		</Layout>
	);
}
