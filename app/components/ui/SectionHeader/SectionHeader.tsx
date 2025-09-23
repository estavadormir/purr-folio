interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => (
  <div className={`space-y-4 ${className || ''}`}>
    <div className="space-y-2">
      <h2 className="title-section">{title}</h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
    </div>
    {subtitle && <p className="subtitle max-w-2xl">{subtitle}</p>}
  </div>
);