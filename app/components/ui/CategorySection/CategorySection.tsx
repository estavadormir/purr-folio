import type { TechCategory } from '@/types';
import { twMerge } from 'tailwind-merge';
import { TechCard } from '../TechCard';

interface CategorySectionProps {
  category: TechCategory;
  className?: string;
}

export const CategorySection = ({
  category,
  className,
}: CategorySectionProps) => (
  <div className={twMerge('mb-8 mx-5 list-none', className)}>
    <li className="ml-5 font-bold sm:ml-0">{category.title}</li>
    <div className="h-1 bg-tiktokPink w-32 mt-1" />
    <ul className="mb-5 flex h-full w-full flex-row flex-wrap justify-start pl-3">
      {category.items.map((item) => (
        <TechCard key={item.name} item={item} />
      ))}
    </ul>
  </div>
);
