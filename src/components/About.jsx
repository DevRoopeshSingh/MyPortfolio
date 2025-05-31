import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div id="about" className="wrapper py-16 bg-gray-50 dark:bg-gray-800">
      <div 
        ref={ref} 
        className={`container mx-auto px-4 max-w-4xl ${
          inView ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">About Me</h3>
        
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg transform rotate-3"></div>
                <img 
                  src="/profile-about.jpg" 
                  alt="Roopesh Singh" 
                  className="relative z-10 rounded-lg w-full h-auto object-cover shadow-md"
                  onError={(e) => {e.target.onerror = null; e.target.src = "/icons/profile-placeholder.svg"}}
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Roopesh Singh</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a results-driven Frontend Architect with 8+ years of experience designing scalable applications, 
                optimizing performance, and leading cross-functional teams. My journey began in Mumbai, where I 
                discovered my passion for creating elegant solutions to complex UI challenges.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My expertise spans modern frontend technologies, with particular focus on React, TypeScript, and 
                performance optimization. I've modernized 5+ legacy systems, reducing maintenance costs by 25% and 
                spearheaded UI optimizations that cut API calls by 40% and boosted user engagement by 30%.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Beyond coding, I'm passionate about mentoring developers, reducing technical debt, and leveraging 
                the latest technologies to deliver enterprise-grade solutions. Recently, I've been exploring AI-driven 
                UI/UX solutions and integrating AI APIs in modern interfaces to create more intuitive user experiences.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Problem Solver
                </span>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  Team Player
                </span>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  Fast Learner
                </span>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                  Detail-Oriented
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
