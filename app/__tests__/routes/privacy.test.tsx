import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PrivacyPage from '../../privacy/page';

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

describe('PrivacyPage', () => {
  it('renders privacy policy title', () => {
    render(<PrivacyPage />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders all privacy sections', () => {
    render(<PrivacyPage />);

    const sections = [
      'Information We Collect',
      'Analytics',
      'Contact',
      'Third-Party Services',
      'Changes'
    ];

    sections.forEach(section => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });
  });

  it('renders plausible analytics information', () => {
    render(<PrivacyPage />);

    expect(screen.getAllByText(/Plausible Analytics/)).toHaveLength(2);
    expect(screen.getByText(/Does not use cookies/)).toBeInTheDocument();
    expect(screen.getByText(/Does not collect personal data/)).toBeInTheDocument();
  });

  it('renders contact information section', () => {
    render(<PrivacyPage />);

    expect(screen.getByText(/email address and any information/)).toBeInTheDocument();
    expect(screen.getByText(/will not be shared with third parties/)).toBeInTheDocument();
  });

  it('uses LegalPageLayout component', () => {
    render(<PrivacyPage />);
    expect(screen.getByTestId('legal-page-layout')).toBeInTheDocument();
  });
});