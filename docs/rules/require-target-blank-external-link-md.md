---
pageClass: 'rule-details'
sidebarDepth: 0
title: 'svelte/require-target-blank-external-link-md'
description: 'require `target="_blank"` attribute for external links'
---

# svelte/require-target-blank-external-link-md

> require `target="_blank"` attribute for external links

- :exclamation: <badge text="This rule has not been released yet." vertical="middle" type="error"> **_This rule has not been released yet._** </badge>

## :book: Rule Details

This rule reports ???.

<!--eslint-skip-->

```svelte
<script>
  /* eslint svelte/--: "error" */
</script>

<!-- ✓ GOOD -->

<!-- ✗ BAD -->
```

## :wrench: Options

```json
{
  "svelte/--": ["error", {}]
}
```

-

## :books: Further Reading

-

## :mag: Implementation

- [Rule source](https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/src/rules/require-target-blank-external-link-md.ts)
- [Test source](https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/tests/src/rules/require-target-blank-external-link-md.ts)
