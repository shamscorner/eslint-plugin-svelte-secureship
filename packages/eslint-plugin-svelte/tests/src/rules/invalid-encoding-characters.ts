import { RuleTester } from '../../utils/eslint-compat.js';
import rule from '../../../src/rules/invalid-encoding-characters.js';
import { loadTestCases } from '../../utils/utils.js';

const tester = new RuleTester({
	languageOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	}
});

tester.run(
	'invalid-encoding-characters',
	rule as any,
	loadTestCases('invalid-encoding-characters')
);
