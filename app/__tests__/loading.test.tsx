import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loading from '../loading';

describe('Loading', () => {
  it('renders loading spinner', () => {
    const { container } = render(<Loading />);

    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('min-h-screen', 'bg-slate-900', 'flex', 'items-center', 'justify-center');

    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('rounded-full', 'h-32', 'w-32', 'border-t-2', 'border-b-2', 'border-accent-primary');
  });
});