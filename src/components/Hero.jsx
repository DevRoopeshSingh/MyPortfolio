import React, { useState, useEffect } from 'react';
import myProfileImage from '../assets/myProfileImage.png';

const roles = [
  'User Interface Architect',
  'Frontend Developer',
  'Full Stack Engineer',
  'React Specialist',
  'UI/UX Designer',
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let typingTimeout;

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < role.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(role.substring(0, displayedText.length + 1));
          setSpeed(150); // Typing speed
        }, speed);
      } else {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(role.substring(0, displayedText.length - 1));
          setSpeed(50); // Deleting speed
        }, speed);
      } else {
        // Move to the next role
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentRoleIndex, speed]);

  return (
    <div className="hero__content relative text-center mt-16 p-10 rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg p-6">
        <img 
          src={myProfileImage} 
          alt="Profile" 
          className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-white shadow-md" 
        />
        <div className="mt-6">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </h1>
          <p className="text-xl text-white mb-4">
            Over 7 years of experience in designing and delivering high-quality software solutions.
          </p>
        </div>
      </div>
      <hr className="border-gray-300 my-4" />
      <button
        aria-label="View My Work"
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
      >
        View My Work
      </button>
    </div>
  );
};

export default Hero;
