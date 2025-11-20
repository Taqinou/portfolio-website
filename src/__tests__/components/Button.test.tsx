import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button href="/test">Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('renders primary variant correctly', () => {
    render(
      <Button href="/test" variant="primary">
        Primary Button
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-white');
    expect(link).toHaveClass('text-black');
  });

  it('renders secondary variant correctly', () => {
    render(
      <Button href="/test" variant="secondary">
        Secondary Button
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('text-white');
    expect(link).toHaveClass('border');
  });

  it('renders ghost variant correctly', () => {
    render(
      <Button href="/test" variant="ghost">
        Ghost Button
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('text-neutral-300');
    expect(link).toHaveClass('border');
  });

  it('applies correct href', () => {
    render(<Button href="/projects">Go to Projects</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('opens external links in new tab', () => {
    render(
      <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
        External Link
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
