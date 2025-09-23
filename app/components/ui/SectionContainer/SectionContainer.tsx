import { twMerge } from 'tailwind-merge';

interface SectionContainerProps {
  id?: string;
  'data-testid'?: string;
  bgColor?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  className?: string;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

export const SectionContainer = ({
  id,
  'data-testid': dataTestId,
  bgColor = 'bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900',
  children,
  maxWidth = '6xl',
  className,
}: SectionContainerProps) => (
  <section
    id={id}
    data-testid={dataTestId}
    className={twMerge('min-h-screen w-full flex flex-col justify-center', bgColor, className)}
  >
    <div className={`w-full px-4 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]} mx-auto py-8 sm:py-12`}>
      <div className="space-y-8 sm:space-y-12">
        {children}
      </div>
    </div>
  </section>
);