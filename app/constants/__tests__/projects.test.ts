import { describe, it, expect } from 'vitest';
import { PROJECTS } from '../projects';

describe('PROJECTS', () => {
  it('should have correct number of projects', () => {
    expect(PROJECTS).toHaveLength(5);
  });

  it('should have required fields for each project', () => {
    PROJECTS.forEach((project) => {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('url');
      expect(project).toHaveProperty('technologies');
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.url).toBeTruthy();
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should have Its Only SEO as first project', () => {
    expect(PROJECTS[0].title).toBe('Its Only SEO');
  });

  it('should have valid URLs', () => {
    PROJECTS.forEach((project) => {
      expect(project.url).toMatch(/^https?:\/\/.+/);
    });
  });
});