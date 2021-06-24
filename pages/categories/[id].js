import Link from 'next/link';
import Layout from '../../components/layout';

import { getCategoryIds, getCategory } from '../../lib/categories';

export async function getStaticPaths() {
	const paths = await getCategoryIds();

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps(props) {
	const data = await getCategory(props.params.id);

	return {
		props: {
			data
		}
	};
}

export default function Category({ data }) {
	const { category, products } = data;

	return (
		<Layout>
			<h1>{ category.name }</h1>

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
