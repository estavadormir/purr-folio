'use client';
import { ProjectCard, SectionTitle } from '@/components/ui';
import { twMerge } from 'tailwind-merge';
import { useRef } from 'react';

interface Project {
  title: string;
  description: string;
  url: string;
  astroFeatured: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'Pasta Is Not A Crime',
    description:
      'A fun project name generator for pasta lovers. Features an interactive interface with smooth animations and a comprehensive database of creative project names inspired by Italian cuisine.',
    url: 'https://pastaisnotacrime.com',
    astroFeatured: false,
  },
  {
    title: 'Naturanal',
    description:
      'A beautiful blog focused on nature, sustainability, and environmental awareness. Built with Astro for optimal performance and featuring stunning visual content about our natural world.',
    url: 'https://naturanal.com',
    astroFeatured: true,
  },
  {
    title: 'Edible Veranda',
    description:
      'A delightful food and gardening blog exploring homegrown ingredients and sustainable cooking. Features recipes, growing tips, and beautiful food photography.',
    url: 'https://edibleveranda.com',
    astroFeatured: true,
  },
  {
    title: 'Its Only SEO',
    description:
      'A comprehensive SEO resource and consultancy platform. Provides in-depth guides, tools, and insights for improving search engine optimization strategies.',
    url: 'https://itsonlyseo.com',
    astroFeatured: true,
  },
];

interface ProjectsSectionProps {
  bgColor?: string;
}

export const ProjectsSection = ({
  bgColor = 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900',
}: ProjectsSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      data-testid="projectsSection"
      className={twMerge('h-screen w-full flex flex-col', bgColor)}
    >
      <div className="h-full flex flex-col">
        <div className="flex-shrink-0 py-6 sm:py-8 text-center">
          <SectionTitle title="Projects" variant="standard" />
          <div className="mt-4 flex items-center justify-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-gradient-to-r from-tiktokPink to-tiktokAqua rounded-full"></div>
              <span>Websites I've crafted</span>
              <div className="w-6 h-1 bg-gradient-to-r from-tiktokAqua to-tiktokPink rounded-full"></div>
            </div>
          </div>

          <div className="mt-2 text-xs text-gray-400">
            Featured on{' '}
            <a
              href="https://astro.build/blog/whats-new-june-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tiktokAqua hover:text-tiktokPink transition-colors underline"
            >
              Astro's June 2025 showcase
            </a>
          </div>

          {/* Navigation - Desktop Switch, Mobile Swipe Indicator */}
          <div className="mt-6 flex items-center justify-center">
            {/* Mobile Swipe Indicator */}
            <div className="sm:hidden flex items-center gap-2 text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-tiktokPink rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-1 bg-tiktokAqua rounded-full animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                  className="w-1 h-1 bg-tiktokPink rounded-full animate-pulse"
                  style={{ animationDelay: '0.4s' }}
                ></div>
              </div>
              <span className="text-xs text-gray-400">Swipe to explore</span>
              <div className="flex items-center gap-1">
                <div
                  className="w-1 h-1 bg-tiktokAqua rounded-full animate-pulse"
                  style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                  className="w-1 h-1 bg-tiktokPink rounded-full animate-pulse"
                  style={{ animationDelay: '0.3s' }}
                ></div>
                <div
                  className="w-1 h-1 bg-tiktokAqua rounded-full animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div
            ref={scrollRef}
            className="h-full md:h-auto overflow-x-auto overflow-y-hidden custom-scrollbar-horizontal scroll-smooth flex md:justify-center"
          >
            <div
              className="flex md:grid md:grid-rows-1 md:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 pb-8 "
              style={{ width: 'max-content' }}
            >
              {PROJECTS.map((project, index) => (
                <div
                  key={project.title}
                  className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-full flex flex-col py-4"
                  style={{
                    animation: `slideInFromRight 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    astroFeatured={project.astroFeatured}
                    className="h-full"
                  />
                </div>
              ))}
              <div className="flex-shrink-0 w-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
