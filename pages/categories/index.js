import Link from 'next/link';

import Layout from '../../components/layout';
import { getCategories } from '../../lib/categories';

export async function getStaticProps() {
	return {
		props: {
			categories: await getCategories()
		}
	};
}

export default function Categories({ categories }) {
	return (
		<Layout>
			<h1>Categories</h1>

			{ categories ? 
				<ol>
					{ categories.map((category) =>
						<li>
							<Link href={ '/categories/' + category.id }>
								<a>{ category.name }</a>
							</Link>
						</li>
					) }
				</ol>
			: '' }
		</Layout>
	);
}
