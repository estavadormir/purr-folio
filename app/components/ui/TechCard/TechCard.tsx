import type { TechItem } from '@/types';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface TechCardProps {
  item: TechItem;
  className?: string;
}

export const TechCard = ({ item, className }: TechCardProps) => (
  <Link className="h-fit" rel="noreferrer" href={item.url}>
    <li
      className={twMerge(
        'hover:bg-accent-secondary mx-2 mt-2 flex h-full cursor-pointer',
        'rounded-lg border-2 border-black px-2 py-2 text-center',
        'transition-colors duration-200 flex flex-col',
        className
      )}
    >
      {item.name}
      {item.description && (
        <span className="text-sm text-gray-500 ml-2">{item.description}</span>
      )}
    </li>
  </Link>
);
