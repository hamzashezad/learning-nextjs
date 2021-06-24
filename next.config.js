module.exports = {
	env: {
		directus: {
			url: process.env.DIRECTUS_URL
		}
	},

	images: {
		domains: [ process.env.IMAGES_HOSTNAME ]
	}
};
