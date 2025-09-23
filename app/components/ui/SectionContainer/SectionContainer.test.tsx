import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionContainer } from './SectionContainer';

describe('SectionContainer', () => {
  it('renders children correctly', () => {
    render(
      <SectionContainer>
        <div>Test content</div>
      </SectionContainer>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default background color', () => {
    const { container } = render(
      <SectionContainer>
        <div>Test</div>
      </SectionContainer>
    );
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-gradient-to-br', 'from-slate-900', 'via-slate-800', 'to-gray-900');
  });

  it('applies custom background color', () => {
    const { container } = render(
      <SectionContainer bgColor="bg-red-500">
        <div>Test</div>
      </SectionContainer>
    );
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-red-500');
  });

  it('applies custom maxWidth', () => {
    const { container } = render(
      <SectionContainer maxWidth="4xl">
        <div>Test</div>
      </SectionContainer>
    );
    const innerDiv = container.querySelector('.max-w-4xl');
    expect(innerDiv).toBeInTheDocument();
  });

  it('applies id and data-testid', () => {
    const { container } = render(
      <SectionContainer id="test-id" data-testid="test-section">
        <div>Test</div>
      </SectionContainer>
    );
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'test-id');
    expect(section).toHaveAttribute('data-testid', 'test-section');
  });

  it('applies custom className', () => {
    const { container } = render(
      <SectionContainer className="custom-class">
        <div>Test</div>
      </SectionContainer>
    );
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });
});