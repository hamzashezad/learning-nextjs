module.exports = {
	distDir: 'out',

	env: {
		directus: {
			url: process.env.DIRECTUS_URL
		}
	},

	images: {
		domains: [ process.env.IMAGES_HOSTNAME ]
	}
};
