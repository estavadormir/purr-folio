export interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  featured?: boolean;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Its Only SEO',
    description:
      'A comprehensive SEO resource and consultancy platform. Provides in-depth guides, tools, and insights for improving search engine optimization strategies.',
    url: 'https://itsonlyseo.com',
    technologies: ['Astro', 'TypeScript', 'TailwindCSS', 'MDX'],
    image: '/images/projects/itsonlyseo.webp',
  },
  {
    title: 'Pasta Is Not A Crime',
    description:
      'A fun project name generator for pasta lovers. Features an interactive interface with smooth animations and a comprehensive database of creative project names inspired by Italian cuisine.',
    url: 'https://pastaisnotacrime.com',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    featured: true,
    image: 'https://pastaisnotacrime.com/lost-in-pasta.png',
  },
  {
    title: 'Naturanal',
    description:
      'A beautiful blog focused on nature, sustainability, and environmental awareness. Built with Astro for optimal performance and featuring stunning visual content about our natural world.',
    url: 'https://naturanal.com',
    technologies: ['Astro', 'TypeScript', 'TailwindCSS', 'PayloadCMS'],
    featured: true,
    image: '/images/projects/naturanal.png',
  },
  {
    title: 'SaveCrops4EU',
    description:
      'An ESA-funded agricultural digital twin project using earth observation and advanced modeling to support sustainable European agriculture through data-driven insights.',
    url: 'https://savecrops4.eu',
    technologies: ['Earth Observation', 'Digital Twin', 'ESA', 'Agriculture'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&crop=center',
  },
  {
    title: 'Edible Veranda',
    description:
      'A delightful food and gardening blog exploring homegrown ingredients and sustainable cooking. Features recipes, growing tips, and beautiful food photography.',
    url: 'https://edibleveranda.com',
    technologies: ['Astro', 'TypeScript', 'TailwindCSS', 'PayloadCMS'],
    image: '/images/projects/edibleveranda.webp',
  },
];