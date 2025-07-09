import React, { useState, useRef, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle keyboard navigation and close menu when clicking outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    const handleClickOutside = (e) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(e.target) && 
          !menuButtonRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-800 dark:to-indigo-900 p-4 shadow-lg" role="banner">
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="/" 
          className="text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 rounded px-2"
          aria-label="Roopesh Singh, Frontend Architect"
        >
          Roopesh Singh
        </a>
        
        {/* Mobile menu button */}
        <button 
          ref={menuButtonRef}
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded p-1"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav aria-label="Primary Navigation" className="flex space-x-6">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-blue-500 rounded px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <DarkModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          ref={navRef}
          className={`absolute top-full left-0 right-0 bg-blue-600 dark:bg-blue-900 shadow-lg p-4 md:hidden transition-opacity duration-200 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={!isMenuOpen}
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex justify-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
