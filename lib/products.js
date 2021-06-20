import fs from 'fs';
import path from 'path';
import html from 'remark-html';
import remark from 'remark';
import matter from 'gray-matter';

const productsDirectory = path.join(process.cwd(), 'products');

export function getProductIds() {
	const fileNames = fs.readdirSync(productsDirectory);

	return fileNames.map((fileName) => ({
		// `params` key required
		params: {
			// `id` is same as filename
			id: fileName.replace(/\.md$/, '')
		}
	}));
}

export async function getProductData(id) {
	const fullPath = path.join(productsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const matterResult = matter(fileContents);
	const processedContent = await remark().use(html).process(matterResult.content);
	const htmlContent = processedContent.toString();

	return { id, content: htmlContent, ...matterResult.data };
}

export function getAllProductData(id) {
	const fileNames = fs.readdirSync(productsDirectory);
	const allProductsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');
		const fullPath = path.join(productsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const matterResult = matter(fileContents);

		return { id, ...matterResult.data };
	});

	return allProductsData;
}
