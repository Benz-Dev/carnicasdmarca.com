/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"header-home": "linear-gradient(180deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.80)), url('/background-header.webp')",
				"about-home": "linear-gradient(180deg, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url('/background-about.jpeg')"
			}
		},
	},
	plugins: [],
}
