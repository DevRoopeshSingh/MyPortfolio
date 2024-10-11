import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-100 py-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Roopesh Singh. All Rights Reserved.</p>
      <nav className="flex justify-center mt-4 space-x-4">
        <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
        <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
