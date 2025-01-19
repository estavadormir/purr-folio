import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export interface MoreInfoItem {
  href: string;
  text: string;
  ariaLabel?: string;
}

export interface MoreInfoProps {
  items: MoreInfoItem[];
  className?: string;
}

export const MoreInfo = ({ items, className }: MoreInfoProps) => {
  return (
    <>
      {items.map((item, index) => (
        <li
          key={`more-info-${item.href}-${index}`}
          className={twMerge('list-none', className)}
        >
          <Link
            className={twMerge(
              'px-6 py-3 bg-tiktokAqua text-black rounded-lg',
              'hover:bg-black hover:text-white',
              'transition-colors duration-200',
              'text-base xl:text-xl font-bold'
            )}
            href={item.href}
            aria-label={item.ariaLabel || item.text}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </>
  );
};
