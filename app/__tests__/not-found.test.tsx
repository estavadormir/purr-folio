import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NotFound from '../not-found';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: ReactNode;
    href: string;
  } & AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('NotFound', () => {
  it('renders 404 page content', () => {
    render(<NotFound />);

    expect(screen.getAllByText('404')).toHaveLength(2);
    expect(screen.getByText('Lost in cyberspace?')).toBeInTheDocument();
    expect(
      screen.getByText(
        "The page you're looking for seems to have wandered off into the digital void. Don't worry though — even the best developers get lost sometimes!"
      )
    ).toBeInTheDocument();
  });

  it('renders home link with correct attributes', () => {
    render(<NotFound />);

    const homeLink = screen.getByRole('link', { name: /take me home/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('applies correct styling classes', () => {
    const { container } = render(<NotFound />);

    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('min-h-screen', 'bg-gradient-to-br', 'from-slate-900', 'via-gray-900', 'to-slate-800', 'text-white', 'flex', 'items-center', 'justify-center', 'px-4');

    const homeLink = screen.getByRole('link', { name: /take me home/i });
    expect(homeLink).toHaveClass(
      'px-6',
      'py-3',
      'bg-gradient-to-r',
      'from-accent-primary',
      'to-accent-secondary',
      'text-white',
      'rounded-lg'
    );
  });
});
