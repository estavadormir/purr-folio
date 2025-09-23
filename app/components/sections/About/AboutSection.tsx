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
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h2 className="title-section">
                About me
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
            </div>

            <div className="space-y-4 subtitle">
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

          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white font-sans">
                Some of the tech I work with
              </h3>

              <div className="space-y-3">
                <div className="space-y-2">
                  <h4 className="body-small text-accent-secondary uppercase tracking-wider font-medium">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'SolidJS', 'React', 'Next.js', 'Vue.js', 'Astro', 'Angular', 'TailwindCSS'].map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag px-3 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700 hover:border-accent-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="body-small text-accent-primary uppercase tracking-wider font-medium">
                    Backend & Cloud
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Go', 'Python', 'Laravel', 'NestJS', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag px-3 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700 hover:border-accent-secondary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="body-small text-white uppercase tracking-wider font-medium">
                    Testing & DevOps
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Vitest', 'Jest', 'Cypress', 'GitHub Actions', 'Grafana', 'Prometheus', 'Cloudflare'].map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag px-3 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700 hover:border-white transition-colors"
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
