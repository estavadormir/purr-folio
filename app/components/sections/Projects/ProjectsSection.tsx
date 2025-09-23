import { twMerge } from 'tailwind-merge';
import { ProjectCard } from '@/components/ui';

interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  featured?: boolean;
  image?: string;
}

const PROJECTS: Project[] = [
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

interface ProjectsSectionProps {
  bgColor?: string;
}

export const ProjectsSection = ({
  bgColor = 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900',
}: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      data-testid="projectsSection"
      className={twMerge('min-h-screen w-full flex flex-col justify-center', bgColor)}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8 sm:py-12">
        <div className="space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="title-section">
                Things I've built
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-tiktokPink to-tiktokAqua"></div>
            </div>
            <p className="subtitle max-w-2xl">
              A collection of projects I've worked on, from web applications to content platforms.
              Each one taught me something new about building great user experiences. Some were featured on{' '}
              <a
                href="https://astro.build/blog/whats-new-june-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-text hover:text-tiktokPink transition-colors underline"
              >
                Astro's showcase
              </a> and various tech communities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="relative">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  featured={project.featured}
                  technologies={project.technologies}
                  image={project.image}
                />
              ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 custom-scrollbar-horizontal">
                {PROJECTS.map((project) => (
                  <div key={project.title} className="flex-shrink-0 w-72">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      url={project.url}
                      featured={project.featured}
                      technologies={project.technologies}
                      image={project.image}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile scroll hint */}
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-tiktokPink rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-tiktokAqua rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-tiktokPink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="body-small">Swipe to explore</span>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-tiktokAqua rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-tiktokPink rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-1 h-1 bg-tiktokAqua rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
