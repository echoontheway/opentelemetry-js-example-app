module.exports = {
  ignorePatterns: ['dist'],
  overrides: [
    {
      files: ['client.ts', 'server.ts'],
      rules: {
        'import/first': 'off',
        'import/order': 'off',
      },
    },
  ],
};
