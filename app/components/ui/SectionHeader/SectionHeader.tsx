interface SectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => (
  <div className={`space-y-4 text-center ${className || ''}`}>
    <div className="space-y-2 flex flex-col items-center">
      <h2 className="title-section">{title}</h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
    </div>
    {subtitle && <p className="subtitle max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);