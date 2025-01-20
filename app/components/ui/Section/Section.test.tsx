import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Section } from './Section';

describe('Section', () => {
  it('renders without crashing', () => {
    render(
      <Section id="test" title="Test Section">
        <div>Test Content</div>
      </Section>
    );
    expect(screen.getByText('Test Section')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Section id="test" title="Test Section">
        <div>Test Content</div>
      </Section>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct classes', () => {
    render(
      <Section id="test" title="Test Section" className="custom-class">
        <div>Test Content</div>
      </Section>
    );
    const section = screen.getByRole('region');
    expect(section).toHaveClass('custom-class');
    expect(section).toHaveClass('h-screen');
  });

  it('handles different variants', () => {
    const { rerender } = render(
      <Section id="test" title="Test" variant="initial">
        <div>Test Content</div>
      </Section>
    );
    expect(screen.getByRole('region')).toBeInTheDocument();

    rerender(
      <Section id="test" title="Test" variant="tech">
        <div>Test Content</div>
      </Section>
    );
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
