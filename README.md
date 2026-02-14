# 🪶 @shrikebot/eslint-config

Opinionated ESLint flat config, Prettier, and EditorConfig for TypeScript projects. No formatting rules in ESLint — Prettier owns that. Every rule earns its place by catching real bugs or eliminating confusing patterns.

## Quick Start

```bash
npm install -D @shrikebot/eslint-config eslint typescript-eslint prettier
```

**`eslint.config.js`**

```js
import shrikeConfig from "@shrikebot/eslint-config";

export default shrikeConfig();
```

**`.prettierrc`**

```json
"@shrikebot/eslint-config/prettier"
```

**`.editorconfig`** — copy once:

```bash
cp node_modules/@shrikebot/eslint-config/.editorconfig .editorconfig
```

Done.

## Overrides

```js
import shrikeConfig from "@shrikebot/eslint-config";

export default shrikeConfig({
    rules: {
        "no-console": "warn", // stricter for libraries
    },
});
```

## What's In The Box

### ESLint — 50+ rules, zero formatting

| Category | Examples | Why |
|----------|----------|-----|
| **TypeScript** | `no-shadow`, `no-unused-vars`, `consistent-type-imports`, `no-use-before-define` | TS-aware versions of base rules |
| **Correctness** | `eqeqeq`, `curly`, `prefer-const`, `array-callback-return`, `no-self-compare`, `no-constant-binary-expression`, `no-promise-executor-return` | Catches real bugs |
| **Security** | `no-eval`, `no-implied-eval`, `no-new-func`, `no-extend-native` | Blocks dangerous patterns |
| **Dead code** | `no-useless-return`, `no-useless-call`, `no-extra-bind`, `no-lone-blocks` | Keeps things clean |
| **Clarity** | `no-nested-ternary`, `no-lonely-if`, `yoda`, `one-var`, `no-eq-null` | Code should be readable |

Formatting (indent, quotes, semicolons, spacing) is **not** in ESLint. That's Prettier's job.

### Prettier

| Setting | Value |
|---------|-------|
| Indent | 4 spaces |
| Quotes | Double |
| Semicolons | Always |
| Trailing commas | All |
| Print width | 120 |

### EditorConfig

LF line endings · 4-space indent · trim trailing whitespace · final newline · UTF-8

## Philosophy

- **Every rule prevents a real problem.** No aesthetic preferences disguised as lint rules.
- **Prettier formats. ESLint catches bugs.** Clean separation, no conflicts.
- **Overridable.** Your project, your call. The defaults are strong opinions held loosely.

## Used By

- [atp-cli](https://gitlab.com/shrikebot/atp-cli) — Agent Trust Protocol CLI
- [orrery.js](https://github.com/ShrikeBot/orrery.js) — Robot Time library

## License

MIT
