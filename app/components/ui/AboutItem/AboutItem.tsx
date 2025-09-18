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
      'group block',
      item.hide === 'mobile' && 'hidden sm:block',
      item.hide === 'desktop' && 'sm:hidden',
      className
    )}
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <span className="text-white text-base sm:text-lg lg:text-xl font-medium group-hover:text-tiktokAqua transition-colors duration-300">
          {item.text}
        </span>
      </div>
    </div>
  </Link>
);
