# @shrikebot/eslint-config

Shared ESLint flat config, Prettier, and EditorConfig for ShrikeBot TypeScript projects.

## Install

```bash
npm install -D @shrikebot/eslint-config eslint typescript-eslint prettier
```

## ESLint

Create `eslint.config.js`:

```js
import shrikeConfig from "@shrikebot/eslint-config";

export default shrikeConfig();
```

With project-specific overrides:

```js
import shrikeConfig from "@shrikebot/eslint-config";

export default shrikeConfig({
    rules: {
        "no-console": "warn",
    },
});
```

## Prettier

Create `.prettierrc`:

```json
"@shrikebot/eslint-config/prettier"
```

Or copy the config:

```bash
cp node_modules/@shrikebot/eslint-config/.prettierrc.json .prettierrc
```

## EditorConfig

Copy to your project root:

```bash
cp node_modules/@shrikebot/eslint-config/.editorconfig .editorconfig
```

## What's included

### ESLint Rules

- **TypeScript-specific** — `no-shadow`, `no-unused-vars`, `consistent-type-imports`, `no-use-before-define`
- **Correctness** — `eqeqeq`, `curly`, `prefer-const`, `no-eval`, `array-callback-return`, `no-self-compare`
- **Safety** — `no-extend-native`, `no-new-func`, `no-return-assign`, `no-sequences`
- **Style (non-formatting)** — `no-nested-ternary`, `no-lonely-if`, `yoda`, `one-var`

Formatting is handled entirely by Prettier — no formatting rules in ESLint.

### Prettier

4-space indent, double quotes, semicolons, trailing commas, 100 char print width.

### EditorConfig

LF line endings, 4-space indent, trim trailing whitespace, final newline.

## License

MIT
