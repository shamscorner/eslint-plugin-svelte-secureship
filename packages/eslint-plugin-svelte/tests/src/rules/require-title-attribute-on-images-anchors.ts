import { RuleTester } from '../../utils/eslint-compat.js';
import rule from '../../../src/rules/require-title-attribute-on-images-anchors.js';
import { loadTestCases } from '../../utils/utils.js';

const tester = new RuleTester({
	languageOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	}
});

tester.run(
	'require-title-attribute-on-images-anchors',
	rule as any,
	loadTestCases('require-title-attribute-on-images-anchors')
);
