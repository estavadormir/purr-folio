import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RootLayout from '../layout';

vi.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter',
    variable: '--font-sans',
  }),
  Space_Mono: () => ({
    className: 'space-mono',
    variable: '--font-mono',
  }),
  JetBrains_Mono: () => ({
    className: 'jetbrains-mono',
    variable: '--font-code',
  }),
}));

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const testContent = 'Test content';
    const { getByText } = render(
      <RootLayout>
        <div>{testContent}</div>
      </RootLayout>
    );

    expect(getByText(testContent)).toBeInTheDocument();
  });

  it('renders with proper structure', () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="test-content">Test</div>
      </RootLayout>
    );

    expect(container.querySelector('[data-testid="test-content"]')).toBeInTheDocument();
  });
});