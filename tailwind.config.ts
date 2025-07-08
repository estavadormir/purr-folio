import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content'> = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
};
export default config;
