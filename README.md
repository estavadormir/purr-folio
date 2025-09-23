# Purr-folio

A modern Next.js portfolio template built with TypeScript, TailwindCSS, and purr-ui components. This template provides a clean, professional foundation for creating personal portfolio websites.

**Live Demo:** [andrelikescomputers.dev](https://andrelikescomputers.dev)

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with TailwindCSS v4
- **Component Library**: Pre-built components from purr-ui for consistent styling
- **Type Safety**: Full TypeScript support throughout the project
- **Testing Ready**: Configured with Vitest for unit testing
- **Performance Optimized**: Image optimization and font loading out of the box
- **SEO Friendly**: Built-in meta tags and structured data

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone this repository or use it as a template
2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint with zero warnings policy
- `pnpm test` - Run tests with Vitest
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report

## Project Structure

```
├── app/                 # Next.js app directory
├── public/             # Static assets
├── components/         # React components
├── styles/            # Global styles
├── package.json       # Dependencies and scripts
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json      # TypeScript configuration
└── next.config.js     # Next.js configuration
```

## Customization

### Styling

The project uses TailwindCSS v4 for styling. You can customize the design by:

1. Modifying the TailwindCSS configuration in `tailwind.config.js`
2. Updating component styles using Tailwind utility classes
3. Adding custom CSS in the global styles file

### Components

This template uses purr-ui components for consistent design. You can:

1. Browse available components in the purr-ui documentation
2. Customize component props to match your design needs
3. Create new components following the established patterns

### Content

Update the portfolio content by modifying the components in the `app` directory. Key areas to customize:

- Personal information and bio
- Project showcase
- Skills and technologies
- Contact information

## Deployment

### Vercel (Recommended)

This template includes Vercel configuration for seamless deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js framework
4. Deploy automatically on every push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/estavadormir/purr-folio)

### Other Platforms

The built application can be deployed to any platform that supports Node.js applications:

- **Netlify**: Supports Next.js with automatic builds
- **Railway**: One-click deployment with GitHub integration
- **DigitalOcean App Platform**: Managed deployment with scaling
- **AWS Amplify**: Full-stack deployment with CI/CD

## Contributing

If you find bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the MIT License.