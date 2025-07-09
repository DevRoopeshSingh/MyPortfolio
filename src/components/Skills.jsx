import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Skills data with categories
const skillsData = {
  frontend: [
    { name: 'React JS', icon: '/icons/react-colored.svg', level: 'Advanced' },
    { name: 'Next.js', icon: '/icons/nextjs-colored.svg', level: 'Advanced' },
    { name: 'TypeScript', icon: '/icons/typescript-colored.svg', level: 'Advanced' },
    { name: 'JavaScript', icon: '/icons/javascript-colored.svg', level: 'Advanced' },
    { name: 'HTML5', icon: '/icons/html5-colored.svg', level: 'Advanced' },
    { name: 'CSS3', icon: '/icons/css3-colored.svg', level: 'Advanced' },
  ],
  stateManagement: [
    { name: 'Redux', icon: '/icons/redux-colored.svg', level: 'Advanced' },
    { name: 'React Query', icon: '/icons/react-query-colored.svg', level: 'Advanced' },
  ],
  backend: [
    { name: 'Node JS', icon: '/icons/nodejs-colored.svg', level: 'Intermediate' },
    { name: 'Express.js', icon: '/icons/expressjs-colored.svg', level: 'Intermediate' },
    { name: 'GraphQL', icon: '/icons/graphql-colored.svg', level: 'Intermediate' },
  ],
  ui: [
    { name: 'UI Architecture', icon: '/icons/architecture-colored.svg', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind-colored.svg', level: 'Advanced' },
    { name: 'Ant Design', icon: '/icons/antd-colored.svg', level: 'Advanced' },
    { name: 'Material UI', icon: '/icons/material-ui-colored.svg', level: 'Advanced' },
  ],
  testing: [
    { name: 'Jest', icon: '/icons/jest-colored.svg', level: 'Advanced' },
    { name: 'Cypress', icon: '/icons/cypress-colored.svg', level: 'Intermediate' },
  ],
  devOps: [
    { name: 'Docker', icon: '/icons/docker-colored.svg', level: 'Intermediate' },
    { name: 'AWS', icon: '/icons/aws-colored.svg', level: 'Intermediate' },
  ],
  performance: [
    { name: 'Performance Opt', icon: '/icons/performance-colored.svg', level: 'Advanced' },
  ],
};

// Individual skill card component
const SkillCard = ({ skill, index, inView }) => {
  const { ref, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 100, // Staggered animation
  });

  return (
    <li
      ref={ref}
      className={`text-center bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow flex flex-col items-center hover:shadow-xl transition-all duration-300 transform ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <img
        src={skill.icon}
        alt={`${skill.name} icon`}
        className="w-16 h-16 mb-4"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/icons/code-colored.svg';
        }}
      />
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{skill.name}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-300">{skill.level}</p>
    </li>
  );
};

// Skill category section component
const SkillCategory = ({ title, skills, inView }) => {
  return (
    <div className="mb-10">
      <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 border-b border-indigo-200 dark:border-indigo-700 pb-2">
        {title}
      </h4>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} inView={inView} />
        ))}
      </ul>
    </div>
  );
};

// Main Skills component
const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Map skill categories to their display names
  const categoryNames = {
    frontend: 'Frontend Technologies',
    stateManagement: 'State Management',
    backend: 'Backend Technologies',
    ui: 'UI Frameworks & Design',
    testing: 'Testing',
    devOps: 'DevOps & Deployment',
    performance: 'Performance Optimization'
  };

  return (
    <section id="skills" className="wrapper mx-auto max-w-5xl py-12 mt-8 px-4">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
        Technical Stack
      </h3>
      
      <div 
        ref={ref}
        className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Skills and technical proficiencies"
      >
        {Object.keys(skillsData).map((category, index) => (
          <SkillCategory
            key={category}
            title={categoryNames[category]}
            skills={skillsData[category]}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
