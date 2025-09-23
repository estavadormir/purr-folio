import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Error from '../error';

describe('Error', () => {
  const mockError = {
    name: 'TestError',
    message: 'Test error message',
    digest: 'test-digest'
  };
  const mockReset = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders error page with correct content', () => {
    render(<Error error={mockError} reset={mockReset} />);

    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
    expect(screen.getByText('Try again')).toBeInTheDocument();
  });

  it('calls reset function when button is clicked', () => {
    render(<Error error={mockError} reset={mockReset} />);

    const resetButton = screen.getByText('Try again');
    fireEvent.click(resetButton);

    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it('logs error to console on mount', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<Error error={mockError} reset={mockReset} />);

    expect(consoleSpy).toHaveBeenCalledWith(mockError);
  });

  it('applies correct styling classes', () => {
    const { container } = render(<Error error={mockError} reset={mockReset} />);

    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('min-h-screen', 'bg-slate-900', 'text-white');

    const button = screen.getByText('Try again');
    expect(button).toHaveClass('px-6', 'py-3', 'bg-accent-primary', 'text-white', 'rounded-lg');
  });
});