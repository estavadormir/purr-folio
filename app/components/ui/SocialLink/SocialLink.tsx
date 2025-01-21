import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SocialLinkProps {
  href: string;
  icon?: IconType;
  children?: React.ReactNode;
  className?: string;
}

export const SocialLink = ({
  href,
  icon: Icon,
  children,
  className,
}: SocialLinkProps) => (
  <Link
    className={twMerge(
      'hover:text-tiktokPink mr-2 mt-2 flex cursor-pointer',
      'justify-start rounded-lg px-2 text-center sm:text-xl',
      className
    )}
    href={href}
  >
    {Icon && <Icon size={32} className="mr-2" />}
    {children}
  </Link>
);
