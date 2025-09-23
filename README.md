# Purr-folio

A modern, clean portfolio template built with Next.js and styled with TailwindCSS. This template features responsive design, dark aesthetics, and smooth animations perfect for developers and creative professionals.

## Features

- **Modern Design**: Clean, professional layout with a focus on content
- **Responsive**: Looks great on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Easy Customization**: Simple configuration and component structure
- **Type Safe**: Full TypeScript support throughout
- **Component Library**: Powered by purr-ui for consistent, accessible components

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/estavadormir/purr-folio.git
cd purr-folio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update your personal details in the main page component located at `app/page.tsx`. You can modify:

- Name and title
- Bio and description
- Skills and technologies
- Project information
- Contact details

### Styling

The template uses TailwindCSS for styling. You can:

- Modify colors in `tailwind.config.js`
- Adjust spacing and typography
- Add custom animations
- Update the overall theme

### Projects

Add your projects by updating the projects array in the main component. Each project supports:

- Title and description
- Technology tags
- Links to live demos and source code
- Project images

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The template works with any static hosting provider:

- Netlify
- GitHub Pages
- AWS S3
- Digital Ocean

Build the project first:
```bash
pnpm build
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [purr-ui](https://github.com/estavadormir/purr-ui) - Component library
- [Lucide React](https://lucide.dev/) - Icon library

## Contributing

Feel free to submit issues and pull requests. This template is meant to be a starting point for your own portfolio.

## License

MIT License - feel free to use this template for your own portfolio.
