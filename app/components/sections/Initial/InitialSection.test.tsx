import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InitialSection } from './InitialSection';
import type { ReactNode } from 'react';

vi.mock('typewriter-effect', () => ({
  default: ({ options }: { options: { strings: string[] } }) => (
    <div data-testid="typewriter">{options.strings.join(', ')}</div>
  ),
}));

interface MoreInfoItem {
  href: string;
  text: string;
}

vi.mock('./MoreInfo', () => ({
  MoreInfo: ({ items }: { items: MoreInfoItem[] }) => (
    <div data-testid="more-info">
      {items.map((item, index) => (
        <a key={index} href={item.href} aria-label={item.text}>
          {item.text}
        </a>
      ))}
    </div>
  ),
}));

vi.mock('@/components/ui', () => ({
  Section: ({
    id,
    title,
    subtitle,
    children,
    className,
  }: {
    id: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
  }) => (
    <section id={id} aria-label={id} className={className}>
      <div>
        <h2>{title}</h2>
        {subtitle && <span>{subtitle}</span>}
      </div>
      {children}
    </section>
  ),
}));

describe('InitialSection', () => {
  it('renders main heading', () => {
    render(<InitialSection />);
    expect(screen.getByText('André')).toBeInTheDocument();
  });

  it('renders typewriter with correct strings', () => {
    render(<InitialSection />);
    const typewriter = screen.getByTestId('typewriter');
    expect(typewriter).toBeInTheDocument();
    expect(typewriter).toHaveTextContent(
      'a developer, a good developer, an ok developer, a cool developer, a kewl developer, a passionate coder, a problem solver, :)'
    );
  });

  it('renders navigation links', () => {
    render(<InitialSection />);
    expect(screen.getByText('Who?')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct section attributes', () => {
    const { container } = render(<InitialSection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'home');
    expect(section).toHaveAttribute('aria-label', 'home');
  });

  it('applies correct background classes', () => {
    const { container } = render(<InitialSection />);
    const section = container.querySelector('section');
    expect(section).toHaveClass(
      'bg-gradient-to-br',
      'from-slate-900',
      'via-slate-800',
      'to-gray-900'
    );
  });
});
