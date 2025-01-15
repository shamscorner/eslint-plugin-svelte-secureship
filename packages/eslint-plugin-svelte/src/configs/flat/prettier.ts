// IMPORTANT!
// This file has been automatically generated,
// in order to update its content execute "pnpm run update"
import type { Linter } from 'eslint';
import base from './base.js';
const config: Linter.Config[] = [
	...base,
	{
		name: 'svelte:prettier:turn-off-rules',
		rules: {
			// eslint-plugin-svelte rules
			'svelte/indent': 'off'
		}
	}
];
export default config;
