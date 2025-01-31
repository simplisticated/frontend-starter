module.exports = {
    root: true,
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        "import/extensions": [
            "error",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
                json: "always",
                png: "always",
                svg: "always",
                jpeg: "always",
                jpg: "always",
            },
        ],
        "import/no-unresolved": "off",
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        "react/function-component-definition": [
            "error",
            {
                namedComponents: ["function-declaration"],
            },
        ],
        "react/destructuring-assignment": ["error", "never"],
        "react/require-default-props": "off",
        "no-console": "off",
        "no-use-before-define": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-underscore-dangle": [
            "error",
            {
                allowAfterThis: true,
            },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
    },
    ignorePatterns: [
        "build/",
        "node_modules/",
        "public/libraries/",
        "commands/",
    ],
};
