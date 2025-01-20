import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FaGithub } from 'react-icons/fa';
import { SocialLink } from './SocialLink';

describe('SocialLink', () => {
  it('renders without crashing', () => {
    render(<SocialLink href="https://test.com">Test Link</SocialLink>);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('renders with icon when provided', () => {
    render(
      <SocialLink href="https://test.com" icon={FaGithub}>
        GitHub
      </SocialLink>
    );
    const link = screen.getByText('GitHub');
    expect(link.parentElement?.querySelector('svg')).toBeInTheDocument();
  });

  it('has correct href attribute', () => {
    render(<SocialLink href="https://test.com">Test Link</SocialLink>);
    const link = screen.getByText('Test Link').closest('a');
    expect(link).toHaveAttribute('href', 'https://test.com');
  });
});
