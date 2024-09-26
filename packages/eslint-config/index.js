/** @type {import("eslint").Linter.Config} */
module.exports = {
	plugins: ['import'],
	extends: ['plugin:prettier/recommended'],
	rules: {
		'import/order': [
			'error',
			{
				groups: ['type', ['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
				pathGroups: [
					{
						pattern: '**/*.css',
						group: 'type',
						position: 'after'
					},
					{
						pattern: '**/*.scss',
						group: 'type',
						position: 'after'
					}
				],
				'newlines-between': 'always',
				warnOnUnassignedImports: true,
				pathGroupsExcludedImportTypes: ['**/*.css', '**/*.scss'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: false
				}
			}
		]
	}
};
