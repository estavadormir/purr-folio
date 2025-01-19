import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InitialSection } from './InitialSection';

describe('Initial', () => {
  it('renders without crashing', () => {
    render(<InitialSection />);
    const home = screen.getByTestId('home');
    expect(home).toBeInTheDocument();
  });

  // Remove the z-9 test since we're not using that class anymore
  it('renders with correct classes', () => {
    render(<InitialSection />);
    const home = screen.getByTestId('home');
    expect(home).toHaveClass('h-screen');
  });
});
