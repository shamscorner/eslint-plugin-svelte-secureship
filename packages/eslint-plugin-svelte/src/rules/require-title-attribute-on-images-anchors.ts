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
		if (attr.type === 'SvelteDirective' && attr.key.type === 'SvelteDirectiveKey') {
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

/** Checks if the alt attribute is empty "" */
function hasEmptyAltAttribute(node: AST.SvelteStartTag) {
	return node.attributes.some((attr) => {
		if (attr.type !== 'SvelteAttribute' || attr.key.name !== 'alt') return false;

		// Case 1: alt=""
		if (
			attr.value.length === 1 &&
			attr.value[0].type === 'SvelteLiteral' &&
			attr.value[0].value === ''
		) {
			return true;
		}

		// Case 2: alt=
		if (attr.value.length === 0) {
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

				// Skip title requirement for img tags with empty alt attribute
				if (node.name.name === 'img' && hasEmptyAltAttribute(node.startTag)) {
					return;
				}

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
