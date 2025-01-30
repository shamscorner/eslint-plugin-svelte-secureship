// IMPORTANT!
// This file has been automatically generated,
// in order to update its content execute "pnpm run update"
import type { RuleModule } from '../types.js';
import indent from '../rules/indent.js';
import invalidEncodingCharacters from '../rules/invalid-encoding-characters.js';
import requireTargetBlankExternalLink from '../rules/require-target-blank-external-link.js';
import requireTitleAttributeOnImagesAnchors from '../rules/require-title-attribute-on-images-anchors.js';
import system from '../rules/system.js';

export const rules = [
	indent,
	invalidEncodingCharacters,
	requireTargetBlankExternalLink,
	requireTitleAttributeOnImagesAnchors,
	system
] as RuleModule[];
