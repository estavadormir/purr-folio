import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LegalPageLayout } from './LegalPageLayout';

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('LegalPageLayout', () => {
  const mockSections = [
    {
      title: 'Section 1',
      content: <p>Content 1</p>,
    },
    {
      title: 'Section 2',
      content: <p>Content 2</p>,
    },
  ];

  it('renders title correctly', () => {
    render(<LegalPageLayout title="Test Title" sections={mockSections} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders all sections', () => {
    render(<LegalPageLayout title="Test Title" sections={mockSections} />);
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('renders back link', () => {
    render(<LegalPageLayout title="Test Title" sections={mockSections} />);
    const backLink = screen.getByText('Back to portfolio');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders last updated date', () => {
    render(<LegalPageLayout title="Test Title" sections={mockSections} />);
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });

  it('renders gradient underline', () => {
    const { container } = render(<LegalPageLayout title="Test Title" sections={mockSections} />);
    const underline = container.querySelector('.bg-gradient-to-r.from-accent-primary.to-accent-secondary');
    expect(underline).toBeInTheDocument();
  });
});