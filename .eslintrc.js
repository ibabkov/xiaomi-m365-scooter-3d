module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint', // TypeScript plugin to enable linting of TypeScript code
		'prettier', // Prettier plugin to integrate Prettier formatting rules with ESLint
	],
	extends: [
		'next/core-web-vitals', // Next.js specific linting rules for performance and best practices
		'plugin:@typescript-eslint/recommended', // Recommended TypeScript linting rules
		'plugin:prettier/recommended', // Integrates Prettier with ESLint and displays Prettier errors as ESLint errors
		'prettier', // Disables all ESLint rules that are unnecessary or might conflict with Prettier
	],
	root: true,
	env: {
		node: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'newline-before-return': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
			},
		],
	},
};
