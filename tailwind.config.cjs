/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Raleway', 'sans-serif']
		},
		fontWeight: {
			normal: 400,
			medium: 500,
			bold: 600,
			black: 700
		},
		extend: {
			colors: {
				primary: '#2c3e50',
				secondary: '#FF6347',
				tertiary: '#FFD700',
				background: '#faf6f3',
				accent: '#2c3e50'
			}
		}
	},
	plugins: []
};
