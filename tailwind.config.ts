import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				orangered: '#ff4500',

				social: {
					zap: '#25d366',
					github: '#171717',
					linkedin: '#0a66c2',
				},
			},
			fontFamily: {
				ubuntuCond: '"Ubuntu Condensed", sans-serif',
				bebasNeue: '"Bebas Neue", cursive',
				rajdhani: '"Rajdhani", sans-serif',
				odibee: '"Odibee Sans", sans-serif',
			},
			screens: {
				mobile360px: '360px',
				mobile414px: '414px',
				mobile480px: '480px',
				mobile600px: '600px',
				mobile640px: '640px',
				tablet768px: '768px',
				tablet860px: '860px',
				tablet960px: '960px',
				desktop1024px: '1024px',
				desktop1280px: '1280px',
				desktop1336px: '1336px',
				desktop1630px: '1630px',
			},
		},
	},
	plugins: [],
} satisfies Config;
