import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-800 dark:to-indigo-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          Roopesh Singh
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="/" className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200">
              Home
            </a>
            <a href="#about" className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200">
              About
            </a>
            <a href="#experience" className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200">
              Experience
            </a>
            <a href="#projects" className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200">
              Projects
            </a>
            <a href="#contact" className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200">
              Contact
            </a>
          </nav>
          <DarkModeToggle />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-blue-600 dark:bg-blue-900 shadow-lg p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200"
                onClick={toggleMenu}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
            <div className="mt-4 flex justify-center">
              <DarkModeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
