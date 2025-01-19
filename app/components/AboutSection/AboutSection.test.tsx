import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AboutSection } from './AboutSection';

describe('About', () => {
  it('renders without crashing', () => {
    render(<AboutSection />);
    const about = screen.getByTestId('about');
    expect(about).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    render(<AboutSection />);
    const about = screen.getByTestId('about');
    expect(about).toHaveClass('z-11');
  });
});
