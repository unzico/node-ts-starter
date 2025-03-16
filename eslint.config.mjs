import { ESLint } from "eslint";

const eslint = new ESLint({
  overrideConfig: {
    root: true,
    env: { node: true, es2020: true },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "prettier",
      "plugin:@typescript-eslint/recommended",
    ],
    ignorePatterns: ["dist", "build", ".eslintrc.cjs", "node_modules", "yarn"],
    parser: "@typescript-eslint/parser",
    plugins: ["prettier", "import", "simple-import-sort"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // import rules
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.ts",
            "**/*.spec.ts",
            // this directory includes utilities for testing that may rely on devDependencies
            "**/src/utils/tests/*",
          ],
        },
      ],
      "import/extensions": [
        "error",
        "never",
        {
          json: "always",
          // we use .middleware.ts for middleware files, but ESLint picks it up as the actual extension
          middleware: "ignorePackages",
        },
      ],
    },
  },
});

export default eslint;