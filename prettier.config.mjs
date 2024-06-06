/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  tabWidth: 2,
  printWidth: 100,
  parser: 'typescript',
  trailingComma: 'all',
  arrowParens: 'always',

  // Import sorting
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^@flowless(?:/.*)?',
    '^@flowless/ui(?:/.*)?',
    '^types$',
    '^@/types(?:/.*)?',
    '^@/config(?:/.*)?',
    '^@/store(?:/.*)?',
    '^@/routes(?:/.*)?',
    '^@/app(?:/.*)?',
    '^@/providers(?:/.*)?',
    '^@/lib(?:/.*)?',
    '^@/registry(?:/.*)?',
    '^@/styles(?:/.*)?',
    '^@/assets(?:/.*)?',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],

  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};

export default config;
