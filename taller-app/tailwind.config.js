/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/Components*.jsx",
		".src/Pages/*.jsx",
	],
	theme: {
		fontFamily: {
			'font-sans': ['Inter'],
			'serif': ['Inter, SemiBold']
		},

		extend: {
			container: {
				padding: '1rem',
				// default breakpoints 
				screens: {
					sm: '600px',
					md: '728px',
					lg: '984px',
					xl: '1240px',
					'2xl': '1496px',
				}
			},
			fontFamily: {
				'font-sans': ['Inter'],
				'serif': [']Inter, Semi-bold']
			},
		},


	},
	plugins: [],
}

