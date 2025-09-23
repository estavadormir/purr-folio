# Personal Portfolio Website

A modern, performant, and SEO-optimized personal portfolio website built with Next.js 15 and TailwindCSS.

> **Note**: This is a split repository from a larger private monorepo. Issues and pull requests are welcome!

## Features

- Responsive design that works across all devices
- Clean and modern UI with smooth animations
- Optimized performance with 100/100 Lighthouse scores
- SEO optimized
- Accessible (WCAG compliant)
- Consistent styling with TailwindCSS
- Type-safe with TypeScript
- Comprehensive test coverage
- CI/CD with GitHub Actions

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/) - Testing framework
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code quality tools

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
app/
├── components/        # React components
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── constants/        # Constants and config
├── types/           # TypeScript types
└── ...
```

## Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test -- --watch

# Check test coverage
pnpm test -- --coverage
```

## License

[GNU General Public License v3.0](./LICENSE)
