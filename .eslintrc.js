module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
    ignorePatterns: [
        "build/",
        "package_scripts/",
        ".eslintrc.js",
        "jest.config.js",
        "node_modules/",
        "public/libraries/",
    ],
};
