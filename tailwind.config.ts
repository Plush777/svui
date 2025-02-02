import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				gray1: 'var(--gray1)',
				white1: 'var(--white1)',
				black1: 'var(--black1)'
			},
			width: {
				'220': '220px'
			},
			height: {
				nav: 'calc(100% - 72px)',
				accordion: '72px'
			},
			padding: {
				mainContents: '48px 100px',
				nav: '20px 16px',
				navItem: '7px 8px',
				accordion: '16px 12px'
			},
			maxWidth: {
				accordion: '700px'
			},
			fontSize: {
				accordion: '22px',
				accordionDetails: '18px'
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
