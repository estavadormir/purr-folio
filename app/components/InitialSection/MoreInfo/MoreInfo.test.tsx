import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MoreInfo } from './MoreInfo';

describe('MoreInfo', () => {
  const mockItems = [
    { href: '#test', text: 'Test Link', ariaLabel: 'Test Link' },
  ];

  it('renders without crashing', () => {
    render(<MoreInfo items={mockItems} />);
    const link = screen.getByText('Test Link');
    expect(link).toBeInTheDocument();
  });

  it('renders links correctly', () => {
    render(<MoreInfo items={mockItems} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#test');
  });
});
