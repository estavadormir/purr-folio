import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TermsPage from '../../terms/page';

vi.mock('@/components/ui', () => ({
  LegalPageLayout: ({ title, sections }: any) => (
    <div data-testid="legal-page-layout">
      <h1>{title}</h1>
      {sections.map((section: any, index: number) => (
        <div key={index} data-testid={`section-${index}`}>
          <h2>{section.title}</h2>
          <div>{section.content}</div>
        </div>
      ))}
    </div>
  ),
}));

describe('TermsPage', () => {
  it('renders terms of use title', () => {
    render(<TermsPage />);
    expect(screen.getByText('Terms of Use')).toBeInTheDocument();
  });

  it('renders all terms sections', () => {
    render(<TermsPage />);

    const sections = [
      'Acceptance of Terms',
      'Use License',
      'Content',
      'Limitations',
      'Accuracy of Materials',
      'Links',
      'Modifications',
      'Governing Law'
    ];

    sections.forEach(section => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });
  });

  it('renders acceptance terms content', () => {
    render(<TermsPage />);

    expect(screen.getByText(/By accessing and using this website/)).toBeInTheDocument();
    expect(screen.getByText(/agree to be bound by these Terms of Use/)).toBeInTheDocument();
  });

  it('renders use license restrictions', () => {
    render(<TermsPage />);

    expect(screen.getByText(/modify or copy the materials/)).toBeInTheDocument();
    expect(screen.getByText(/use the materials for any commercial purpose/)).toBeInTheDocument();
  });

  it('renders governing law information', () => {
    render(<TermsPage />);

    expect(screen.getByText(/laws of Luxembourg/)).toBeInTheDocument();
  });

  it('uses LegalPageLayout component', () => {
    render(<TermsPage />);
    expect(screen.getByTestId('legal-page-layout')).toBeInTheDocument();
  });
});