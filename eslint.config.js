import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
	{
		ignores: ['.next/**', 'node_modules/**', 'dist/**'],
	},
	{
		files: ['src/**/*.{ts,tsx,js,jsx}'],
		extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'newline-before-return': 'error',
			'comma-dangle': ['error', 'always-multiline'],
		},
	},
	prettierConfig,
);
