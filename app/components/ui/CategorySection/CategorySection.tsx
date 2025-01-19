import type { TechCategory } from '@/types';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface CategorySectionProps {
  category: TechCategory;
  className?: string;
}

export const CategorySection = ({
  category,
  className,
}: CategorySectionProps) => (
  <div className={twMerge('list-none', className)}>
    <li className="font-bold text-base sm:text-lg mb-2">{category.title}</li>
    <div className="h-1 bg-tiktokPink w-24 sm:w-32 mb-2 sm:mb-3" />
    <ul className="flex flex-wrap gap-1.5 sm:gap-2">
      {category.items.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <li
            className={twMerge(
              'text-xs sm:text-sm bg-white/50 px-2 sm:px-3 py-1 sm:py-1.5',
              'rounded-lg border border-gray-200 '
            )}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  </div>
);
