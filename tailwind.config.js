/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"clash-display": ['"Clash Display"', "sans-serif"],
				manrope: ['"Manrope"', "sans-serif"],
			},
			colors: {
				primary: "#00C7BE",
				gray: "#A3A3A3",
				grayLight: "#d4d4d4",
				darkblue: "#0e3c5a",
				background: "#0a0a0a",
				darkGray: "#27272a",
			},
			keyframes: {
				shine: {
					"0%": { backgroundPosition: "200% 0" },
					"25%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "-200% 0" },
				},
			},
			animation: {
				shine: "shine 3s ease-out infinite",
			},
		},
	},
	plugins: [],
};
