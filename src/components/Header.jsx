import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-white">
        Roopesh Singh
      </a>
      <nav className="flex space-x-8">
        <a href="/" className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200">
          Home
        </a>
        <a href="#about" className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200">
          About
        </a>
        <a
          href="https://www.linkedin.com/in/roopesh-singh-66b62931b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg hover:underline hover:text-gray-300 transition duration-200"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
