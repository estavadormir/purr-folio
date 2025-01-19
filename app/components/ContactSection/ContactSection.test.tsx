import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ContactSection } from './ContactSection';

describe('Contact', () => {
  it('renders without crashing', () => {
    render(<ContactSection />);
    const Contact = screen.getByTestId('Contact');
    expect(Contact).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    render(<ContactSection />);
    const Contact = screen.getByTestId('Contact');
    expect(Contact).toHaveClass('z-12');
  });
});
