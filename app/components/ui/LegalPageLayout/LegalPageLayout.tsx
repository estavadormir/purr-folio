import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  sections: LegalSection[];
}

export const LegalPageLayout = ({ title, sections }: LegalPageLayoutProps) => {
  const sectionClasses = "text-xl font-medium text-white font-sans";
  const contentClasses = "space-y-4";

  return (
    <main className={twMerge('min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900')}>
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8 sm:py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent-secondary hover:text-accent-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="body-small font-medium">Back to portfolio</span>
            </Link>

            <div className="space-y-2">
              <h1 className="title-section">{title}</h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
            </div>

            <p className="body-small">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          <div className="space-y-6 body-text">
            {sections.map((section, index) => (
              <section key={index} className={contentClasses}>
                <h2 className={sectionClasses}>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};