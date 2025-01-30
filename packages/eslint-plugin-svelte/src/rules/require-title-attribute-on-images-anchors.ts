import type { AST } from 'svelte-eslint-parser';
import { createRule } from '../utils/index.js';

/** Checks whether the given element node has title attribute */
function hasTitleAttribute(node: AST.SvelteStartTag) {
	return node.attributes.some((attr) => {
		// Check for static title attribute
		if (attr.type === 'SvelteAttribute' && attr.key.name === 'title' && attr.value.length > 0) {
			return true;
		}

		// Check for dynamic title attribute using bind:title
		if (
			attr.type === 'SvelteDirective' &&
			attr.key.type === 'Identifier' &&
			attr.key.name === 'title'
		) {
			return true;
		}

		// Check for shorthand title attribute {title}
		if (
			attr.type === 'SvelteShorthandAttribute' &&
			'name' in attr.key &&
			attr.key.name === 'title'
		) {
			return true;
		}

		return false;
	});
}

export default createRule('require-title-attribute-on-images-anchors', {
	meta: {
		docs: {
			description: 'Require title attribute on img and a elements for better accessibility',
			category: 'Best Practices',
			recommended: true
		},
		schema: [],
		messages: {
			missingTitle: '{{element}} elements must have a title attribute for better accessibility.'
		},
		type: 'suggestion'
	},
	create(context) {
		return {
			SvelteElement(node) {
				if (node.name.type !== 'SvelteName' || (node.name.name !== 'img' && node.name.name !== 'a'))
					return;

				if (!hasTitleAttribute(node.startTag)) {
					context.report({
						node,
						messageId: 'missingTitle',
						data: {
							element: node.name.name
						}
					});
				}
			}
		};
	}
});
