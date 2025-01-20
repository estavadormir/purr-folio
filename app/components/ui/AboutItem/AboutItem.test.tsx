import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AboutItem } from './AboutItem';

const mockItem = {
  icon: '👋',
  text: 'Test Item',
  url: 'https://test.com',
};

describe('AboutItem', () => {
  it('renders without crashing', () => {
    render(<AboutItem item={mockItem} />);
    expect(screen.getByText(/Test Item/)).toBeInTheDocument();
  });

  it('renders icon and text', () => {
    render(<AboutItem item={mockItem} />);
    const element = screen.getByText(/Test Item/);
    expect(element.textContent).toContain('👋');
    expect(element.textContent).toContain('Test Item');
  });

  it('links to correct URL', () => {
    render(<AboutItem item={mockItem} />);
    const link = screen.getByText(/Test Item/).closest('a');
    expect(link).toHaveAttribute('href', 'https://test.com');
  });

  it('handles mobile/desktop visibility', () => {
    const mobileItem = { ...mockItem, hide: 'mobile' as const };
    const { rerender } = render(<AboutItem item={mobileItem} />);
    expect(screen.getByText(/Test Item/).closest('a')).toHaveClass('hidden');

    const desktopItem = { ...mockItem, hide: 'desktop' as const };
    rerender(<AboutItem item={desktopItem} />);
    expect(screen.getByText(/Test Item/).closest('a')).toHaveClass('sm:hidden');
  });
});
