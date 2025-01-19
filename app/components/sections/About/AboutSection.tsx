import { AboutItem, SectionTitle } from '@/components';
import { ABOUT_ITEMS } from '@/constants';
import { twMerge } from 'tailwind-merge';

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="About"
      data-testid="about"
      className={twMerge(
        'h-screen z-11 relative flex w-full flex-col justify-center bg-slate-900'
      )}
    >
      <div className="w-full px-4 sm:px-5 max-w-4xl mx-auto">
        <SectionTitle title="About me" subtitle="..." variant="standard" />
        <div className="mt-6">
          <ul className="space-y-3">
            {ABOUT_ITEMS.map((item) => (
              <AboutItem key={item.text} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
