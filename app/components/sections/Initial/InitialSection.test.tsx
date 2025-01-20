import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InitialSection } from './InitialSection';

describe('Initial', () => {
  it('renders without crashing', () => {
    render(<InitialSection />);
    // Look for the section by ID instead of data-testid
    const home = screen.getByRole('region', { name: /home/i });
    expect(home).toBeInTheDocument();
  });

  it('renders with correct classes', () => {
    render(<InitialSection />);
    const home = screen.getByRole('region', { name: /home/i });
    expect(home).toHaveClass('h-screen');
  });

  it('renders the title and subtitle', () => {
    render(<InitialSection />);
    expect(screen.getByText("Hi, I'm")).toBeInTheDocument();
    expect(screen.getByText('André')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<InitialSection />);
    expect(screen.getByText('Who?')).toBeInTheDocument();
    expect(screen.getByText('tech stack')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
