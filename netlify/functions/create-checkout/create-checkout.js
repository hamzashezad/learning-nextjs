const fetch = require('node-fetch');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
	const items = JSON.parse(event.body);

	// TODO: avoidable?
	const response = await fetch(process.env.DIRECTUS_URL + '/items/products');
	const products = await response.json();

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],

			line_items: items.map((item) => {
				const product = products.data.find((p) => p.id === item.id);

				const res = {
					price_data: {
						currency: 'gbp',

						product_data: {
							name: product.name,

							description: product.description,

							images: [product.header_image]
						},

						unit_amount: product.price
					},

					quantity: item.quantity
				};

				return res;
			}),

			mode: 'payment',

			success_url: `${process.env.APP_URL}/checkout/success`,

			cancel_url: `${process.env.APP_URL}/checkout/cancel`
		});

		return {
			statusCode: 200,

			body: JSON.stringify({
				sessionId: session.id,
			})
		};
	} catch (error) {
		return {
			statusCode: 501,

			body: JSON.stringify(error)
		}
	}
};
