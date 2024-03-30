/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['mado', 'mado/tailwindcss'],
  ignorePatterns: ['dist'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  root: true,
  settings: {
    'import/resolver': {
      typescript: {
        project: require.resolve('./tsconfig.json'),
      },
    },
  },
};
