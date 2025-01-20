import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CategorySection } from './CategorySection';

const mockCategory = {
  title: 'Test Category',
  items: [
    {
      name: 'Test Item 1',
      url: 'https://test1.com',
      description: 'Test Description 1',
    },
    {
      name: 'Test Item 2',
      url: 'https://test2.com',
      description: 'Test Description 2',
    },
  ],
};

describe('CategorySection', () => {
  it('renders without crashing', () => {
    render(<CategorySection category={mockCategory} />);
    expect(screen.getByText('Test Category')).toBeInTheDocument();
  });

  it('renders all category items', () => {
    render(<CategorySection category={mockCategory} />);
    mockCategory.items.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('renders links with correct URLs', () => {
    render(<CategorySection category={mockCategory} />);
    mockCategory.items.forEach((item) => {
      const link = screen.getByText(item.name).closest('a');
      expect(link).toHaveAttribute('href', item.url);
    });
  });
});
