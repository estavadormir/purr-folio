import type { AboutItem as AboutItemType } from '@/types';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface AboutItemProps {
  item: AboutItemType;
  className?: string;
}

export const AboutItem = ({ item, className }: AboutItemProps) => (
  <Link
    className={twMerge(
      'h-fit',
      item.hide === 'mobile' && 'hidden sm:flex',
      item.hide === 'desktop' && 'sm:hidden',
      className
    )}
    rel="noreferrer"
    href={item.url}
  >
    <li className="hover:text-tiktokPink cursor-pointer transition-colors duration-200 text-base sm:text-lg text-white">
      {item.icon} {item.text}
    </li>
  </Link>
);
