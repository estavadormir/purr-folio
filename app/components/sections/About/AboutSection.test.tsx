import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AboutSection } from './AboutSection';

describe('AboutSection', () => {
  it('renders section title', () => {
    render(<AboutSection />);
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  it('renders personal introduction', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Hello! I'm André/)).toBeInTheDocument();
    expect(screen.getByText(/7 years of experience/)).toBeInTheDocument();
  });

  it('renders location and education', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Luxembourg/)).toBeInTheDocument();
    expect(screen.getByText(/Bachelor's in Computer Science/)).toBeInTheDocument();
  });

  it('renders personal interests', () => {
    render(<AboutSection />);
    expect(screen.getByText(/running marathons/)).toBeInTheDocument();
    expect(screen.getByText(/longboard/)).toBeInTheDocument();
    expect(screen.getByText(/World of Warcraft/)).toBeInTheDocument();
  });

  it('renders technology categories', () => {
    render(<AboutSection />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend & Cloud')).toBeInTheDocument();
    expect(screen.getByText('Testing & DevOps')).toBeInTheDocument();
  });

  it('renders frontend technologies', () => {
    render(<AboutSection />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('SolidJS')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('renders backend technologies', () => {
    render(<AboutSection />);
    expect(screen.getByText('Go')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });

  it('has correct section attributes', () => {
    const { container } = render(<AboutSection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'about');
    expect(section).toHaveAttribute('data-testid', 'about');
  });
});