import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TechstackSection } from './TechstackSection';

describe('TechstackSection', () => {
  it('renders without crashing', () => {
    render(<TechstackSection />);
    const section = screen.getByTestId('techstackSection'); // Match the actual data-testid
    expect(section).toBeInTheDocument();
  });

  it('renders with correct classes', () => {
    render(<TechstackSection />);
    const section = screen.getByTestId('techstackSection');
    expect(section).toHaveClass('h-[110vh]');
  });
});
