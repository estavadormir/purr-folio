import { CategorySection, SectionTitle } from '@/components/ui';
import { TECH_STACK } from '@/constants';

export const TechstackSection = () => (
  <section
    id="techstack"
    data-testid="techstackSection"
    className="h-[110vh] z-13 relative top-0 flex w-full flex-col items-center justify-center bg-white"
  >
    <SectionTitle title="Tech Stack" variant="tech" />
    <div className="flex flex-col mt-3 h-screen">
      {Object.values(TECH_STACK).map((category) => (
        <CategorySection
          key={category.title}
          category={category}
          className={
            category.title === 'Runtime Environments' ? 'hidden lg:block' : ''
          }
        />
      ))}
    </div>
  </section>
);
