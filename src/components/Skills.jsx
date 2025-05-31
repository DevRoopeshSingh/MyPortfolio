import React from 'react';

const skills = [
  { name: 'React JS', icon: '/icons/react-colored.svg', level: 'Advanced' },
  { name: 'Next.js', icon: '/icons/nextjs-colored.svg', level: 'Advanced' },
  { name: 'TypeScript', icon: '/icons/typescript-colored.svg', level: 'Advanced' },
  { name: 'Redux', icon: '/icons/redux-colored.svg', level: 'Advanced' },
  { name: 'React Query', icon: '/icons/react-query-colored.svg', level: 'Advanced' },
  { name: 'Node JS', icon: '/icons/nodejs-colored.svg', level: 'Intermediate' },
  { name: 'Express.js', icon: '/icons/expressjs-colored.svg', level: 'Intermediate' },
  { name: 'GraphQL', icon: '/icons/graphql-colored.svg', level: 'Intermediate' },
  { name: 'UI Architecture', icon: '/icons/architecture-colored.svg', level: 'Advanced' },
  { name: 'Jest', icon: '/icons/jest-colored.svg', level: 'Advanced' },
  { name: 'Cypress', icon: '/icons/cypress-colored.svg', level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind-colored.svg', level: 'Advanced' },
  { name: 'Ant Design', icon: '/icons/antd-colored.svg', level: 'Advanced' },
  { name: 'Material UI', icon: '/icons/material-ui-colored.svg', level: 'Advanced' },
  { name: 'Docker', icon: '/icons/docker-colored.svg', level: 'Intermediate' },
  { name: 'AWS', icon: '/icons/aws-colored.svg', level: 'Intermediate' },
  { name: 'JavaScript', icon: '/icons/javascript-colored.svg', level: 'Advanced' },
  { name: 'HTML5', icon: '/icons/html5-colored.svg', level: 'Advanced' },
  { name: 'CSS3', icon: '/icons/css3-colored.svg', level: 'Advanced' },
  { name: 'Performance Opt', icon: '/icons/performance-colored.svg', level: 'Advanced' },
];

const Skills = () => (
  <div className="wrapper mx-auto max-w-3xl py-12 mt-8">
    <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Technical Stack</h3>
    <ul className="technologies grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="text-center bg-indigo-50 p-6 rounded-lg shadow flex flex-col items-center hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-16 h-16 mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-800 mb-1">{skill.name}</h4>
          <p className="text-sm text-gray-500">{skill.level}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
