import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TechstackSection } from './TechstackSection';

describe('TechstackSection', () => {
  it('renders without crashing', () => {
    render(<TechstackSection />);
    const section = screen.getByTestId('techstackSection');
    expect(section).toBeInTheDocument();
  });

  it('renders with correct classes', () => {
    render(<TechstackSection />);
    const section = screen.getByTestId('techstackSection');
    expect(section).toHaveClass('min-h-screen'); // Updated to match the actual class
  });

  it('renders title on first part only', () => {
    const { rerender } = render(<TechstackSection part="first" />);
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();

    rerender(<TechstackSection part="second" />);
    expect(screen.queryByText('Tech Stack')).not.toBeInTheDocument();
  });
});
