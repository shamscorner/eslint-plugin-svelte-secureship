// IMPORTANT!
// This file has been automatically generated,
// in order to update its content execute "pnpm run update"

/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * enforce consistent indentation
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/indent/
   */
  'svelte/indent'?: Linter.RuleEntry<SvelteIndent>
  /**
   * Disallow invalid encoding characters that may appear due to incorrect character encoding
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/invalid-encoding-characters/
   */
  'svelte/invalid-encoding-characters'?: Linter.RuleEntry<[]>
  /**
   * require `target="_blank"` attribute for external links
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-target-blank-external-link/
   */
  'svelte/require-target-blank-external-link'?: Linter.RuleEntry<SvelteRequireTargetBlankExternalLink>
  /**
   * Require title attribute on img and a elements for better accessibility
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-title-attribute-on-images-anchors/
   */
  'svelte/require-title-attribute-on-images-anchors'?: Linter.RuleEntry<[]>
  /**
   * system rule for working this plugin
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/system/
   */
  'svelte/system'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- svelte/indent -----
type SvelteIndent = []|[{
  indent?: (number | "tab")
  indentScript?: boolean
  switchCase?: number
  alignAttributesVertically?: boolean
  ignoredNodes?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
}]
// ----- svelte/require-target-blank-external-link -----
type SvelteRequireTargetBlankExternalLink = []|[{
  allowReferrer?: boolean
  enforceDynamicLinks?: ("always" | "never")
}]