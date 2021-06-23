import { Directus } from '@directus/sdk';

const directus = new Directus(process.env.directus.url);

export async function getProducts() {
	try {
		const products = await directus.items('products').readMany();

		return await products.data;
	} catch (e) {
		console.error(e);
	}
}

export async function getProduct(id) {
	try {
		const product = await directus.items('products').readOne(id);

		product.quantity = 0;

		return await product;
	} catch (e) {
		console.error(e);
	}
}

export async function getProductIds() {
	try {
		const products = await directus.items('products').readMany({
			fields: ['id']
		});

		return products.data.map((p) => ({ params: p }));
	} catch (e) {
		console.error(e);
	}
}
