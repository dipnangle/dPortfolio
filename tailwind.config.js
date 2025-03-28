/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				kaushan: ["Kaushan Script", "Arial", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
        		dm: ["DM Sans", "sans-serif"],
        		fira: ["Fira Code", "sans-serif"],
			},
			width: {
				"1/30": "3%",
				"1/50": "5%",
				"1/80": "8%",
				"1/10": "10%",
				"1/7": "15%",
				"1/7": "15%",
				"2/3":"66.66%",
				"4/5":"80%",
				"400": "400px",
				"500": "500px",
				"600": "1500px"
			},
		},
	},
	plugins: [],
}

