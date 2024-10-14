/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"fade-slide-up": {
					"0%": { opacity: 0, transform: "translateY(20px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
			},
			animation: {
				"fade-slide-up": "fade-slide-up 0.5s ease-out forwards",
			},
		},
	},
	plugins: [daisyui], // Correct ES module import of DaisyUI
	daisyui: {
		themes: [
			"light",
			"cupcake",
			"aqua",
			"dim",
			"wireframe",
			"lemonade",
			"valentine",
			"retro",
		],
	},
};
