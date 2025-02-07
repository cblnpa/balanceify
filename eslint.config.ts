import * as js from "@eslint/js"
import * as globals from "globals"
import * as react from "eslint-plugin-react"
import * as reactRefresh from "eslint-plugin-react-refresh"
import * as tseslint from "typescript-eslint"
import * as simpleImportSort from "eslint-plugin-simple-import-sort"
import * as reactHooks from "eslint-plugin-react-hooks"

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended,
      ...reactHooks.configs.recommended.rules,
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [["^[a-zA-Z]", "^@", "^src/", "^\\.\\./", "^\\./"]],
        },
      ],
      "simple-import-sort/exports": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  }
)
