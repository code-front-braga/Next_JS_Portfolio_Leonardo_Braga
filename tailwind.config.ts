import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				ubuntuCond: '"Ubuntu Condensed", sans-serif',
				bebasNeue: '"Bebas Neue", cursive',
				rajdhani: '"Rajdhani", sans-serif',
				odibee: '"Odibee Sans", sans-seri',
			},
		},
	},
	plugins: [],
} satisfies Config;
