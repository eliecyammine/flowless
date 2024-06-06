import type { Config } from 'tailwindcss';

import baseConfig from '@flowless/tailwind-config/tailwind.config';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'],

  presets: [baseConfig],

  plugins: [],
};

export default config;
