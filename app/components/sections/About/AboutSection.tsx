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
        'h-screen z-11 relative flex w-full flex-col justify-center bg-slate-900 lg:flex-row xl:min-h-screen'
      )}
    >
      <div className={twMerge('z-11 flex flex-col justify-center lg:w-1/2')}>
        <SectionTitle title="About me" subtitle="..." variant="standard" />
        <div
          className={twMerge(
            'flex flex-col justify-center px-5 w-full',
            'lg:flex-row lg:pt-10',
            'rounded rounded-t-3xl py-3 text-white',
            'lg:justify-start min-w-1/2 max-w-1/2',
            'list-disc pb-1 text-left font-medium'
          )}
        >
          <ul className={twMerge('[&>*]:px-1 text-2xl space-y-4')}>
            {ABOUT_ITEMS.map((item) => (
              <AboutItem key={item.text} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
