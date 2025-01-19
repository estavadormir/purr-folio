import { render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle', () => {
  it('renders title correctly', () => {
    render(<SectionTitle title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionTitle title="Test Title" subtitle="Subtitle" />);
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<SectionTitle title="Test" className="custom-class" />);
    expect(screen.getByRole('heading').parentElement).toHaveClass(
      'custom-class'
    );
  });
});
