import React from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'User Interface / Frontend Architect',
    company: 'Pincler',
    duration: 'Mar 2024 - Jan 2025',
    description: 'Led UI architecture for scalable, high-performance applications. Mentored junior developers, conducted code reviews, and enforced best practices. Optimized frontend performance using React Query & caching, reducing API calls by 40%.',
    skills: ['React', 'UI Architecture', 'React Query', 'Performance Optimization']
  },
  {
    title: 'Lead Frontend Developer',
    company: 'Navya Care',
    duration: 'May 2022 - Mar 2024',
    description: 'Revamped legacy UI using React and Ant Design, improving performance by 30%. Reduced backend API calls to enhance data-fetching efficiency and UX. Improved patient report generation, cutting processing time from 5s to 2s. Integrated AI API modules for personalized treatment suggestions.',
    skills: ['React', 'Ant Design', 'Performance Optimization', 'AI Integration']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Telepresenz',
    duration: 'Jan 2021 - May 2022',
    description: 'Built real-time analytics dashboards with React and Node.js. Automated testing using Jest, Cypress, and TypeWright. Refactored API architecture using TypeScript and REST principles.',
    skills: ['React', 'Node.js', 'TypeScript', 'Jest', 'Cypress']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Traform, Inc.',
    duration: 'Nov 2017 - Jan 2021',
    description: 'Migrated a monolithic Java app to React + Node.js microservices. Modernized legacy codebases and improved maintainability by 60%. Received the "Innovative Development Excellence" award for exceptional contributions to frontend and backend development.',
    skills: ['React', 'Node.js', 'Microservices', 'Java']
  },
  {
    title: 'Software Engineer',
    company: 'Corporate Solutions Redefined',
    duration: 'Jan 2016 - Sep 2017',
    description: 'Enhanced dashboards with role customization and data visualization features. Delivered high-quality code aligned with business priorities.',
    skills: ['Dashboards', 'Data Visualization', 'Frontend Development']
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div id="experience" className="wrapper py-16 bg-white dark:bg-gray-900">
      <div 
        ref={ref} 
        className={`container mx-auto px-4 max-w-4xl ${
          inView ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">Professional Experience</h3>
        
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`mb-12 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h4>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 sm:mt-0">{exp.duration}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
