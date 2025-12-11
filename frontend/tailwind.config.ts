import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docusaurus.config.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
