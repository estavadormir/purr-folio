import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ContactSection } from './ContactSection';
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

describe('ContactSection', () => {
  it('renders section title', () => {
    render(<ContactSection />);
    expect(screen.getByText("Let's work together")).toBeInTheDocument();
  });

  it('renders section description', () => {
    render(<ContactSection />);
    expect(
      screen.getByText(/I'm always interested in hearing/)
    ).toBeInTheDocument();
  });

  it('renders email link', () => {
    const { container } = render(<ContactSection />);
    const emailLink = container.querySelector(
      'a[href="mailto:andrelikescomputers@gmail.com"]'
    );
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:andrelikescomputers@gmail.com'
    );
  });

  it('renders github link', () => {
    const { container } = render(<ContactSection />);
    const githubLink = container.querySelector(
      'a[href="https://github.com/estavadormir/"]'
    );
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/estavadormir/'
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders footer with current year', () => {
    render(<ContactSection />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} André. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('renders footer links', () => {
    render(<ContactSection />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Use')).toBeInTheDocument();
  });

  it('has correct section attributes', () => {
    const { container } = render(<ContactSection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'contacts');
    expect(section).toHaveAttribute('data-testid', 'Contact');
  });
});
