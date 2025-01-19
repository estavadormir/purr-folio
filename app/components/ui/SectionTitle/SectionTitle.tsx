import {
  ContactTitle,
  InitialTitle,
  StandardTitle,
  TechStackTitle,
} from './variants';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: 'initial' | 'standard' | 'tech' | 'contact';
}

export const SectionTitle = ({
  title,
  subtitle,
  className,
  variant = 'standard',
}: SectionTitleProps) => {
  switch (variant) {
    case 'initial':
      return (
        <InitialTitle title={title} subtitle={subtitle} className={className} />
      );
    case 'tech':
      return (
        <TechStackTitle
          title={title}
          subtitle={subtitle}
          className={className}
        />
      );
    case 'contact':
      return (
        <ContactTitle title={title} subtitle={subtitle} className={className} />
      );
    default:
      return (
        <StandardTitle
          title={title}
          subtitle={subtitle}
          className={className}
        />
      );
  }
};
