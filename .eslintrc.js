module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react"],
	settings: {},
	rules: {
		"import/no-extraneous-dependencies": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": "off",
		"react/function-component-definition": "off",
		"import/extensions": "off",
		"import/no-unresolved": "off",
		"import/no-import-module-exports": "off",
	},
};
