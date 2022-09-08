/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./index.html',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		typography: (theme) => ({}),

		extend: {
			colors: {
				primary: '#00040f',
				secondary: '#00f6ff',
				dimWhite: 'rgba(255,255,255,0.7)',
				dimBlue: 'rgba(9,151, 124,0.1)',
			},
			fontFamily: {
				display: ['Rubik', 'sans-serif'],
				body: ['Sarabun', 'sans-serif'],
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		require('flowbite/plugin'),
	],
};
