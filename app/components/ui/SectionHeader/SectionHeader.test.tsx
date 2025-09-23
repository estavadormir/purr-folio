import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('renders title correctly', () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeader title="Test Title" subtitle="Test subtitle" />);
    expect(screen.getByText('Test subtitle')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.queryByText('Test subtitle')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<SectionHeader title="Test Title" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders gradient underline', () => {
    const { container } = render(<SectionHeader title="Test Title" />);
    const underline = container.querySelector('.bg-gradient-to-r.from-accent-primary.to-accent-secondary');
    expect(underline).toBeInTheDocument();
  });
});