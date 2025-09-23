import { ProjectCard } from '@estavadormir/purr-ui';
import { SectionContainer, SectionHeader } from '@/components/ui';
import { PROJECTS } from '@/constants';

interface ProjectsSectionProps {
  bgColor?: string;
}

export const ProjectsSection = ({
  bgColor = 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900',
}: ProjectsSectionProps) => {
  const subtitle = (
    <>
      A collection of projects I've worked on, from web applications to content
      platforms. Each one taught me something new about building great user
      experiences. Some were featured on{' '}
      <a
        href="https://astro.build/blog/whats-new-june-2025/"
        target="_blank"
        rel="noopener noreferrer"
        className="accent-text hover:text-accent-primary transition-colors underline"
      >
        Astro's showcase
      </a>{' '}
      and various tech communities.
    </>
  );

  return (
    <SectionContainer
      id="projects"
      data-testid="projectsSection"
      bgColor={bgColor}
    >
      <SectionHeader title="Things I've built" subtitle={subtitle} />

      <div className="relative">
        <div className="hidden xl:grid xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>

        <div className="xl:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 custom-scrollbar-horizontal">
            {PROJECTS.map((project) => (
              <div key={project.title} className="flex-shrink-0 w-72 sm:w-80">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  technologies={project.technologies}
                  image={project.image}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-accent-primary rounded-full animate-pulse"></div>
              <div
                className="w-1 h-1 bg-accent-secondary rounded-full animate-pulse"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-1 h-1 bg-accent-primary rounded-full animate-pulse"
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
            <span className="body-small">Swipe to explore</span>
            <div className="flex items-center gap-1">
              <div
                className="w-1 h-1 bg-accent-secondary rounded-full animate-pulse"
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div
                className="w-1 h-1 bg-accent-primary rounded-full animate-pulse"
                style={{ animationDelay: '0.3s' }}
              ></div>
              <div
                className="w-1 h-1 bg-accent-secondary rounded-full animate-pulse"
                style={{ animationDelay: '0.5s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
