import { twMerge } from 'tailwind-merge';

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="About"
      data-testid="about"
      className={twMerge(
        'min-h-screen z-11 relative flex w-full flex-col justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900'
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8 sm:py-12">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="title-section">
                About me
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
            </div>

            <div className="space-y-4 subtitle text-center lg:text-left">
              <p>
                Hello! I'm André, a frontend developer with{' '}
                <span className="accent-text">7 years of experience</span>{' '}
                building digital experiences. I've had the privilege of working across diverse sectors—from{' '}
                <span className="text-accent-primary font-medium">startups to the space industry</span>{' '}
                and financial sector—each teaching me something valuable about creating solutions that matter.
              </p>

              <p>
                Currently based in{' '}
                <span className="accent-text">Luxembourg</span>, I specialize in crafting{' '}
                <span className="text-white font-medium">accessible, performant web applications</span>{' '}
                that solve real problems. I have a{' '}
                <span className="text-accent-primary font-medium">Bachelor's in Computer Science</span>{' '}
                and speak English, French, and Portuguese.
              </p>

              <p>
                When I'm not coding, you'll find me{' '}
                <span className="accent-text">running marathons</span>,{' '}
                <span className="text-accent-primary font-medium">cruising on my longboard</span>,{' '}
                or exploring virtual worlds in World of Warcraft. I'm also a devoted cat lover—they make the best debugging partners!
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="space-y-6">
              <div className="space-y-2 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h3 className="text-xl sm:text-2xl font-medium text-white font-sans">
                  Some of the tech I work with
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary lg:hidden"></div>
              </div>

              <div className="space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h4 className="text-sm text-accent-secondary uppercase tracking-wider font-medium">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                    {['TypeScript', 'SolidJS', 'React', 'Next.js', 'Vue.js', 'Astro', 'Angular', 'TailwindCSS'].map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag px-2 py-1 bg-gray-800/80 text-gray-300 rounded border border-gray-700 hover:border-accent-primary hover:bg-gray-700/80 transition-all duration-200 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm text-accent-primary uppercase tracking-wider font-medium">
                    Backend & Cloud
                  </h4>
                  <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                    {['Go', 'Python', 'Laravel', 'NestJS', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag px-2 py-1 bg-gray-800/80 text-gray-300 rounded border border-gray-700 hover:border-accent-secondary hover:bg-gray-700/80 transition-all duration-200 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm text-white uppercase tracking-wider font-medium">
                    Testing & DevOps
                  </h4>
                  <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                    {['Vitest', 'Jest', 'Cypress', 'GitHub Actions', 'Grafana', 'Prometheus', 'Cloudflare'].map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag px-2 py-1 bg-gray-800/80 text-gray-300 rounded border border-gray-700 hover:border-white hover:bg-gray-700/80 transition-all duration-200 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
