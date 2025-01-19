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

const linkStyles = twMerge([
  'h-full w-full rounded',
  'border-2 border-black',
  'px-8 py-3',
  'text-base xl:text-xl',
  'relative',
  'transition-colors duration-200',
  'hover:bg-black hover:text-white',
  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black',
]);

export const MoreInfo = ({ items, className }: MoreInfoProps) => {
  return (
    <>
      {items.map((item, index) => (
        <li
          key={`more-info-${item.href}-${index}`}
          className={twMerge('list-none', className)}
        >
          <Link
            className={linkStyles}
            href={item.href}
            aria-label={item.ariaLabel || item.text}
            rel={
              item.href.startsWith('http') ? 'noopener noreferrer' : undefined
            }
          >
            {item.text}
          </Link>
        </li>
      ))}
    </>
  );
};
