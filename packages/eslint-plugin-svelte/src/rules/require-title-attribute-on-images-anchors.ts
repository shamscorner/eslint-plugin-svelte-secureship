import { AST } from 'svelte-eslint-parser';
import { createRule } from '../utils/index.js';

export default createRule('require-title-attribute-on-images-anchors', {
	meta: {
		docs: {
			description: '',
			category: '',
			recommended: false
		},
		schema: [],
		messages: {},
		type: 'suggestion' // 'problem', or 'layout',
	},
	create(context) {
		return {};
	}
});
