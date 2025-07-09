import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import DarkModeToggle from '../DarkModeToggle';

describe('DarkModeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders the toggle button', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles dark mode when clicked', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i });
    
    // Initially in light mode
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    // Click to enable dark mode
    fireEvent.click(toggleButton);
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('true');
    
    // Click again to disable dark mode
    fireEvent.click(toggleButton);
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  it('initializes with saved preference from localStorage', () => {
    localStorage.setItem('darkMode', 'true');
    
    render(<DarkModeToggle />);
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});