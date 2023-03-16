module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react/recommended',
    'prettier' // make sure it's the last one,
  ],
  overrides: [],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: ['react', 'tailwindcss', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'import/no-unresolved': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/iframe-has-title': 0,
    'no-const-assign': 1,
    'no-extra-boolean-cast': 1,
    'no-irregular-whitespace': 1,
    'no-unused-vars': 1,
    'prettier/prettier': ['warn', { singleQuote: true, trailingComma: 'none' }],
    quotes: ['warn', 'single'],
    'spaced-comment': [1, 'always'],
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
}
