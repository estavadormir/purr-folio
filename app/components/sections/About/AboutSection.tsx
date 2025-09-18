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
        'min-h-screen z-11 relative flex w-full flex-col justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900'
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8 sm:py-12">
        <div className="mb-8 sm:mb-12 text-center">
          <SectionTitle title="About me" subtitle="..." variant="standard" />
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {ABOUT_ITEMS.map((item) => (
            <AboutItem key={item.text} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
