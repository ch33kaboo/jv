/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				fade: 'fade .5s cubic-bezier(1,0,1,.51)'
			},
			keyframes: {
				fade: {
					from: {
						opacity: 0
					},
					to: {
						opacity: 1
					}
				}
			},
			fontFamily: {
				naturally: ['Naturaly']
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['emerald']
	}
};
