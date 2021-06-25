module.exports = {
	env: {
		directus: {
			url: process.env.DIRECTUS_URL
		},

		stripe: {
			public_key: process.env.STRIPE_PUBLIC_KEY
		},
	},


	images: {
		domains: [ process.env.IMAGES_HOSTNAME ]
	}
};
