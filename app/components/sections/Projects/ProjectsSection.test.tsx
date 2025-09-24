import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectsSection } from './ProjectsSection';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

vi.mock('@/constants', () => ({
  PROJECTS: [
    {
      title: 'Test Project 1',
      description: 'Test description 1',
      url: 'https://test1.com',
      technologies: ['React', 'TypeScript'],
      image: '/test1.jpg',
    },
    {
      title: 'Test Project 2',
      description: 'Test description 2',
      url: 'https://test2.com',
      technologies: ['Vue', 'JavaScript'],
      image: '/test2.jpg',
    },
  ],
}));

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: ReactNode;
    href: string;
  } & AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('ProjectsSection', () => {
  it('renders section title', () => {
    render(<ProjectsSection />);
    expect(screen.getByText("Things I've built")).toBeInTheDocument();
  });

  it('renders section description with link', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/A collection of projects/)).toBeInTheDocument();
    expect(screen.getByText("Astro's showcase")).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<ProjectsSection />);
    expect(screen.getAllByText('Test Project 1')).toHaveLength(2);
    expect(screen.getAllByText('Test Project 2')).toHaveLength(2);
  });

  it('applies custom background color', () => {
    const { container } = render(<ProjectsSection bgColor="bg-red-500" />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-red-500');
  });

  it('has correct section attributes', () => {
    const { container } = render(<ProjectsSection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'projects');
    expect(section).toHaveAttribute('data-testid', 'projectsSection');
  });

  it('renders mobile scroll hint', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Swipe to explore')).toBeInTheDocument();
  });
});
