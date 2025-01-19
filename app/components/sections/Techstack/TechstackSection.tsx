import { CategorySection, SectionTitle } from '@/components/ui';
import { TECH_STACK } from '@/constants';
import { twMerge } from 'tailwind-merge';

interface TechstackSectionProps {
  part?: 'first' | 'second';
  bgColor?: string;
}

export const TechstackSection = ({
  part = 'first',
  bgColor = 'bg-white',
}: TechstackSectionProps) => {
  const categories = Object.values(TECH_STACK);
  // Showing 6 categories in the first section
  const firstPart = categories.slice(0, 6);
  const secondPart = categories.slice(6);

  const displayCategories = part === 'first' ? firstPart : secondPart;

  return (
    <section
      id="techstack"
      data-testid="techstackSection"
      className={twMerge(
        'min-h-screen w-full flex flex-col items-center',
        'py-10 sm:py-0 sm:justify-center',
        bgColor
      )}
    >
      <div className="w-full px-4 sm:px-5 max-w-4xl mx-auto">
        {part === 'first' && (
          <div className="mb-6 sm:mb-8">
            <SectionTitle title="Tech Stack" variant="tech" />
          </div>
        )}
        <div className="grid gap-4 sm:gap-6">
          {displayCategories.map((category) => (
            <CategorySection
              key={category.title}
              category={category}
              className="max-w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
