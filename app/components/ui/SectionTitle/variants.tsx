import { twMerge } from 'tailwind-merge';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

// For Initial section (white text with aqua subtitle)
export const InitialTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('flex flex-col', className)}>
    <h2 className="ml-5 mt-5 flex justify-center pl-2 text-4xl text-gray-100 lg:mb-2 lg:justify-start lg:text-6xl">
      {title}
      {subtitle && <span className="text-tiktokAqua ml-2">{subtitle}</span>}
    </h2>
    <div className="w-48 h-1 bg-tiktokPink ml-7 mt-2" />
    <div className="w-32 h-1 bg-tiktokPink ml-7 mt-1" />
  </div>
);

// For the About sections (white text with pink dots)
export const StandardTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('flex flex-col', className)}>
    <h2 className="ml-5 mt-5 flex justify-center pl-2 text-4xl text-gray-100 lg:mb-2 lg:justify-start lg:text-6xl">
      {title}
      {subtitle && <span className="text-tiktokPink ">{subtitle}</span>}
    </h2>
    <div className="w-48 h-1 bg-tiktokPink ml-7 mt-2" />
    <div className="w-32 h-1 bg-tiktokPink ml-7 mt-1" />
  </div>
);

// For TechStack section (black text with pink dots)
export const TechStackTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('flex flex-col', className)}>
    <h2 className="ml-5 mt-5 flex justify-center pl-2 text-4xl text-slate-900 lg:mb-2 lg:justify-start lg:text-6xl">
      {title}
      {subtitle && <span className="text-tiktokPink">{subtitle}</span>}
    </h2>
    <div className="w-48 h-1 bg-tiktokPink ml-7 mt-2" />
    <div className="w-32 h-1 bg-tiktokPink ml-7 mt-1" />
  </div>
);

// For Contact section (pink border bottom style)
export const ContactTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('flex flex-col', className)}>
    <h2 className="flex-start font-display text-brand text-tiktokPink border-tiktokPink mb-4 flex border-b-2 font-bold uppercase lg:text-xl">
      {title}
    </h2>
    {subtitle && (
      <h1 className="mb-2 mt-5 flex justify-start text-4xl text-gray-100 lg:text-6xl">
        {subtitle}
      </h1>
    )}
  </div>
);
