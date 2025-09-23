import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';

const mockProject = {
  title: 'Test Project',
  description: 'A test project description',
  url: 'https://example.com',
  technologies: ['React', 'TypeScript'],
  featured: true,
  image: '/test-image.jpg',
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('renders technologies', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders as a link with correct href', () => {
    render(<ProjectCard {...mockProject} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('limits technologies to 3 and shows count', () => {
    const projectWithManyTechs = {
      ...mockProject,
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    };

    render(<ProjectCard {...projectWithManyTechs} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('+2')).toBeInTheDocument();
    expect(screen.queryByText('PostgreSQL')).not.toBeInTheDocument();
  });
});