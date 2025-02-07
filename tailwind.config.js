/* eslint-disable no-undef */
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
				primaryDark: "#009699", 
				gray: "#A3A3A3",
				grayLight: "#d4d4d4",
				darkblue: "#0e3c5a",
				background: "#0a0a0a",
				darkGray: "#27272a",
			},

			transitionTimingFunction: {
				"minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
			},

			keyframes: {
				"reveal-up": {
					"0%": { opacity: "0", transform: "translateY(80%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"reveal-down": {
					"0%": { opacity: "0", transform: "translateY(-80%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"content-blur": {
					"0%": { filter: "blur(0.3rem)" },
					"100%": { filter: "blur(0)" },
				},
			},
			// keyframes: {
			// 	shine: {
			// 		"0%": { backgroundPosition: "200% 0" },
			// 		"25%": { backgroundPosition: "-200% 0" },
			// 		"100%": { backgroundPosition: "-200% 0" },
			// 	},
			// },
			// animation: {
			// 	shine: "shine 3s ease-out infinite",
			// },
		},
	},
	plugins: [require("tailwindcss-animate")],
};
