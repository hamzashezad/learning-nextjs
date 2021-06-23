import Image from 'next/image';

import { getProductIds, getProduct } from '../../lib/products';
import Layout from '../../components/layout';
import { AddToCart } from '../../components/cart';

// standard nextjs function
export async function getStaticPaths() {
	const paths = await getProductIds();

	return {
		paths,
		fallback: false
	};
}

// standard nextjs function
export async function getStaticProps(props) {
	const product = await getProduct(props.params.id);

	return {
		props: {
			product,
		}
	};
}

export default function Product({ product }) {
	return (
		<Layout>
			<Image
				src={ `${process.env.directus.url}/assets/${product.header_image}` }
				alt={ product.name }
				width={100}
				height={100}
			/>

			<h1>{ product.name }</h1>

			<article>{ product.description }</article>

			<AddToCart item={product} />
		</Layout>
	);
}
