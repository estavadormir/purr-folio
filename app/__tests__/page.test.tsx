import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HomePage from '../page';

vi.mock('@/components', () => ({
  AboutSection: () => <div data-testid="about-section">About Section</div>,
  ContactSection: () => <div data-testid="contact-section">Contact Section</div>,
  InitialSection: () => <div data-testid="initial-section">Initial Section</div>,
  ProjectsSection: () => <div data-testid="projects-section">Projects Section</div>,
}));

describe('HomePage', () => {
  it('renders all sections in correct order', () => {
    render(<HomePage />);

    const sections = [
      screen.getByTestId('initial-section'),
      screen.getByTestId('about-section'),
      screen.getByTestId('projects-section'),
      screen.getByTestId('contact-section'),
    ];

    sections.forEach(section => {
      expect(section).toBeInTheDocument();
    });
  });

  it('applies correct background to main element', () => {
    const { container } = render(<HomePage />);
    const main = container.querySelector('main');
    expect(main).toHaveClass('bg-gradient-to-br', 'from-slate-900', 'via-slate-800', 'to-gray-900');
  });

  it('applies correct z-index classes to section containers', () => {
    const { container } = render(<HomePage />);
    const divs = container.querySelectorAll('div[class*="z-"]');

    expect(divs[0]).toHaveClass('z-10');
    expect(divs[1]).toHaveClass('z-20');
    expect(divs[2]).toHaveClass('z-30');
    expect(divs[3]).toHaveClass('z-40');
  });

  it('applies sticky positioning to all sections', () => {
    const { container } = render(<HomePage />);
    const stickyDivs = container.querySelectorAll('.sticky');

    expect(stickyDivs).toHaveLength(4);
    stickyDivs.forEach(div => {
      expect(div).toHaveClass('h-screen', 'sticky', 'top-0');
    });
  });
});