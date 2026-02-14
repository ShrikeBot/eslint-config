import tseslint from "typescript-eslint";

/**
 * Shared ESLint flat config for ShrikeBot TypeScript projects.
 *
 * Usage in your eslint.config.js:
 *
 *   import shrikeConfig from "@shrikebot/eslint-config";
 *   export default shrikeConfig();
 *
 * Or with overrides:
 *
 *   export default shrikeConfig({
 *       rules: { "no-console": "off" },
 *   });
 */
export default function shrikeConfig(overrides = {}) {
    return tseslint.config(
        {
            ignores: ["dist/**", "node_modules/**"],
        },
        ...tseslint.configs.recommended,
        {
            rules: {
                // === TypeScript-specific ===
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
                ],
                "@typescript-eslint/no-explicit-any": "warn",
                "@typescript-eslint/consistent-type-imports": "error",
                "no-empty-function": "error",
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": "error",
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    { functions: false, classes: true, variables: true },
                ],
                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": "error",

                // === Correctness ===
                "eqeqeq": ["error", "always"],
                "curly": "error",
                "prefer-const": "error",
                "no-eval": "error",
                "no-implied-eval": "error",
                "guard-for-in": "error",
                "no-self-compare": "error",
                "no-template-curly-in-string": "error",
                "array-callback-return": "error",
                "default-case-last": "error",
                "default-param-last": "error",
                "no-duplicate-imports": "error",
                "no-constructor-return": "error",
                "no-promise-executor-return": "error",
                "no-unreachable-loop": "error",
                "no-constant-binary-expression": "error",
                "no-loss-of-precision": "error",
                "no-new-native-nonconstructor": "error",

                // === Safety ===
                "no-caller": "error",
                "no-extend-native": "error",
                "no-extra-bind": "error",
                "no-iterator": "error",
                "no-label-var": "error",
                "no-lone-blocks": "error",
                "no-loop-func": "error",
                "no-multi-str": "error",
                "no-new": "error",
                "no-new-func": "error",
                "no-octal-escape": "error",
                "no-proto": "error",
                "no-return-assign": "error",
                "no-script-url": "error",
                "no-sequences": "error",
                "no-useless-call": "error",
                "no-useless-concat": "error",
                "no-useless-constructor": "error",
                "no-useless-return": "error",
                "no-void": "error",
                "no-eq-null": "error",
                "no-multi-assign": "error",
                "no-unmodified-loop-condition": "error",

                // === Style (non-formatting) ===
                "no-lonely-if": "error",
                "no-unneeded-ternary": "error",
                "no-nested-ternary": "error",
                "one-var": ["error", "never"],
                "prefer-exponentiation-operator": "error",
                "prefer-promise-reject-errors": "error",
                "radix": ["error", "as-needed"],
                "yoda": "error",
                "func-name-matching": "error",
                "no-undef-init": "error",
                "block-scoped-var": "error",
                "prefer-template": "error",
                "prefer-object-spread": "error",
                "no-else-return": "error",

                // === Async ===
                "require-await": "off",
                "no-return-await": "error",

                // === CLI default (override per project) ===
                "no-console": "off",
            },
        },
        overrides,
    );
}
