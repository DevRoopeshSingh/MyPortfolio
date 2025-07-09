import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Netflix GPT',
    description: 'AI-powered movie recommendation platform that uses natural language processing to suggest personalized content based on user preferences and viewing habits.',
    image: '/icons/NetFlix-GPT.png',
    link: 'https://netflix-gpt-demo.netlify.app',
    github: 'https://github.com/roopeshsingh/netflix-gpt',
    tech: ['React', 'OpenAI API', 'Firebase', 'Tailwind CSS', 'TMDb API'],
    features: [
      'AI-based personalized movie recommendations',
      'Natural language search capabilities',
      'User authentication and profile management',
      'Responsive design for all devices'
    ]
  },
  {
    title: 'Dine & Dash',
    description: 'A food delivery platform connecting users to local restaurants with real-time order tracking, secure payments, and an intuitive interface for both customers and restaurant owners.',
    image: '/icons/Dine-and-Dash.png',
    link: 'https://dine-and-dash.vercel.app',
    github: 'https://github.com/roopeshsingh/dine-and-dash',
    tech: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    features: [
      'Real-time order tracking',
      'Secure payment processing',
      'Restaurant dashboard for order management',
      'Customer reviews and ratings'
    ]
  },
  {
    title: 'School Pay App',
    description: 'Secure payment platform for educational institutions that streamlines fee collection, provides detailed payment reports, and offers a user-friendly interface for parents to manage school expenses.',
    image: '/icons/school-pay.png',
    link: 'https://school-pay-demo.vercel.app',
    github: 'https://github.com/roopeshsingh/school-pay',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT Authentication'],
    features: [
      'Secure payment processing',
      'Detailed transaction history',
      'Admin dashboard for school staff',
      'Automated payment reminders'
    ]
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio showcasing my skills, projects, and professional experience with a clean, interactive design and dark mode support.',
    image: '/icons/portfolio.png',
    link: '/',
    github: 'https://github.com/roopeshsingh/portfolio',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    features: [
      'Dark/light mode toggle',
      'Responsive layout for all devices',
      'Interactive UI elements',
      'Contact form functionality'
    ]
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const openProjectDetails = (project) => {
    setActiveProject(project);
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  return (
    <div id="projects" className="wrapper py-16 bg-white dark:bg-gray-900">
      <div 
        ref={ref} 
        className={`container mx-auto px-4 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
      >
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">Projects</h3>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <li
              key={index}
              className="relative group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover-card-effect dark:shadow-gray-900"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {e.target.onerror = null; e.target.src = "/icons/project-placeholder.svg"}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description.substring(0, 100)}...</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    View Details
                  </button>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        {/* Project Details Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none z-10"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="h-48 md:h-72 w-full">
                  <img
                    className="w-full h-full object-cover"
                    src={activeProject.image}
                    alt={activeProject.title}
                    loading="lazy"
                    onError={(e) => {e.target.onerror = null; e.target.src = "/icons/project-placeholder.svg"}}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{activeProject.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{activeProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((tech, idx) => (
                        <span key={idx} className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Features</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      {activeProject.features.map((feature, idx) => (
                        <li key={idx} className="mb-1">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-md flex items-center space-x-2 transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>GitHub Repository</span>
                    </a>
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center space-x-2 transition duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>View Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
