import type { AST } from 'svelte-eslint-parser';
import { createRule } from '../utils/index.js';

const INVALID_CHARS_PATTERN = /â€™|â€œ|â€/g;

export default createRule('invalid-encoding-characters', {
	meta: {
		docs: {
			description:
				'Disallow invalid encoding characters that may appear due to incorrect character encoding',
			category: 'Possible Errors',
			recommended: true
		},
		schema: [],
		messages: {
			invalidChar:
				'Invalid encoding character "{{char}}" detected. This may be due to incorrect UTF-8 encoding.'
		},
		type: 'problem'
	},
	create(context) {
		function checkForInvalidChars(node: { value: string; loc: AST.SourceLocation }) {
			const matches = node.value.match(INVALID_CHARS_PATTERN);
			if (matches) {
				matches.forEach((char) => {
					context.report({
						loc: node.loc,
						messageId: 'invalidChar',
						data: { char }
					});
				});
			}
		}

		return {
			SvelteText: checkForInvalidChars,
			SvelteLiteral: checkForInvalidChars
		};
	}
});
