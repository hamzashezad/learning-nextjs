import { Directus } from '@directus/sdk';

const directus = new Directus(process.env.directus.url);

export async function getCategories() {
	try {
		const categories = await directus.items('categories').readMany();

		return await categories.data;
	} catch (e) {
		console.error(e);
	}
}

export async function getCategory(id) {
	try {
		const category = await directus.items('categories').readOne(id);
		const products = await directus.items('products').readMany({
			filter: {
				category: {
					'_eq': category.id
				}
			}
		});

		return await { category, products: products.data };
	} catch (e) {
		console.error(e);
	}
}

export async function getCategoryIds() {
	try {
		const products = await directus.items('categories').readMany({
			fields: ['id']
		});

		return products.data.map((p) => ({ params: p }));
	} catch (e) {
		console.error(e);
	}
}
