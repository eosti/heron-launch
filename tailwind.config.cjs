/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        fontFamily: {
            'display': ['Helvetica Neue', "HelveticaNeue", "TeX Gyre Heros", "TeXGyreHeros", "FreeSans", "Nimbus Sans L", "Liberation Sans", "Arimo", "Helvetica", "Arial", "sans-serif"],
            'body': ['Source Sans Pro'],
        },
		extend: {},
	},
	plugins: [],
}
