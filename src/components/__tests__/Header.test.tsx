import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../Header';

describe('Header', () => {
  it('renders the header with navigation links', () => {
    render(<Header />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Roopesh Singh')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Header />);
    
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    const mobileMenu = screen.getByRole('navigation', { name: /mobile navigation/i });
    
    expect(mobileMenu).toHaveClass('opacity-0');
    
    fireEvent.click(menuButton);
    
    expect(mobileMenu).toHaveClass('opacity-100');
  });

  it('has proper accessibility attributes', () => {
    render(<Header />);
    
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    
    const logo = screen.getByRole('link', { name: /roopesh singh, frontend architect/i });
    expect(logo).toBeInTheDocument();
  });
});