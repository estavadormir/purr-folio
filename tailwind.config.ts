import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Space Mono', 'monospace'],
        code: ['var(--font-code)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
};
export default config;
