import { twMerge } from 'tailwind-merge';
import { SectionTitle } from '../SectionTitle';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'initial' | 'standard' | 'tech' | 'contact';
}

export const Section = ({
  id,
  title,
  subtitle,
  className,
  children,
  variant = 'initial',
}: SectionProps) => (
  <section
    id={id}
    className={twMerge(
      'h-screen relative flex w-full flex-col justify-center',
      className
    )}
  >
    <SectionTitle title={title} subtitle={subtitle} variant={variant} />
    {children}
  </section>
);
