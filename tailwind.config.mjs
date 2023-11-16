/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"header-home": "linear-gradient(180deg, rgba(3, 3, 3, 0.95), rgba(3, 3, 3, 0.80)), url('/background-header.webp')",
				"about-home": "linear-gradient(180deg, rgba(3, 3, 3, 0.90), rgba(3, 3, 3, 0.90)), url('/background-about.jpeg')",
				"maps-home": "linear-gradient(180deg, rgba(3, 3, 3, 0.90), rgba(3, 3, 3, 0.90)), url('/background_site_shop.jpg')"
			}
		},
	},
	plugins: [],
}
