import globals from "globals";
import importPlugin from "eslint-plugin-import";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "eslint.config.js"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      react,
      "@stylistic/js": stylistic,
      "@typescript-eslint": tseslint.plugin,
      import: importPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Import
      "import/no-duplicates": "error",
      // "import/no-unresolved": "warn",
      // Misc
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      "import/newline-after-import": ["error", { count: 1 }],
      "linebreak-style": ["error", "windows"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-trailing-spaces": "error",
      "prefer-const": "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "linebreak-style": ["error", "windows"],

      // React
      "react-hooks/exhaustive-deps": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "react/no-array-index-key": "warn",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "error",
      // Stylistic
      "@stylistic/js/array-bracket-spacing": ["error", "never"],
      "@stylistic/js/comma-dangle": ["error", "always-multiline"],
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/object-curly-spacing": ["error", "always"],
      // TypeScript
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      // "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "error",
    },
  }
);
