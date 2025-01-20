import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ScrollIndicator } from './ScrollIndicator';

describe('ScrollIndicator', () => {
  it('renders without crashing', () => {
    render(<ScrollIndicator />);
    const indicator = screen.getByTestId('scroll-indicator');
    expect(indicator).toBeInTheDocument();
  });

  it('is initially visible', () => {
    render(<ScrollIndicator />);
    const indicator = screen.getByTestId('scroll-indicator');
    expect(indicator).toBeVisible();
  });

  it('includes screen reader text', () => {
    render(<ScrollIndicator />);
    const srText = screen.getByText('Scroll down for more content');
    expect(srText).toHaveClass('sr-only');
  });

  it('includes chevron icon', () => {
    render(<ScrollIndicator />);
    const icon = screen.getByTestId('scroll-indicator-icon');
    expect(icon).toBeInTheDocument();
  });
});
