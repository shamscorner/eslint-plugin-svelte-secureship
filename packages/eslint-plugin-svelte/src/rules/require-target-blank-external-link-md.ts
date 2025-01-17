import { createRule } from '../utils/index.js';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';

function isExternalUrl(url: string): boolean {
	if (!url) return false;
	return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//');
}

export default createRule('require-target-blank-external-link-md', {
	meta: {
		docs: {
			description: 'require `target="_blank"` attribute for external links',
			category: 'Security Vulnerability',
			recommended: false
		},
		schema: [],
		messages: {
			missing: 'External links must have target="_blank" attribute.'
		},
		type: 'problem'
	},
	create(context) {
		console.log('context', context);
		return {};
	}
});
