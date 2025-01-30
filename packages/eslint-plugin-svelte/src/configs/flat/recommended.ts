// IMPORTANT!
// This file has been automatically generated,
// in order to update its content execute "pnpm run update"
import type { Linter } from 'eslint';
import base from './base.js';
const config: Linter.Config[] = [
	...base,
	{
		name: 'svelte:recommended:rules',
		rules: {
			// eslint-plugin-svelte rules
			'svelte/invalid-encoding-characters': 'error',
			'svelte/require-title-attribute-on-images-anchors': 'error',
			'svelte/system': 'error'
		}
	}
];
export default config;
