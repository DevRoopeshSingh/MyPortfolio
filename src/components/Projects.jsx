import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive React and Tailwind CSS site showcasing skills, projects, and professional experience with a clean, interactive design',
    image: '/icons/portfolio.png',
    link: '/'
  },
  {
    title: 'NetFlix GPT',
    description: 'Netflix GPT is an AI platform that offers personalized recommendations and insights, helping you discover movies and shows tailored to your preferences.',
    image: '/icons/NetFlix-GPT.png',
    link: '/'
  },
  {
    title: 'Dine & Dash',
    description: 'Dine and Dash is a convenient food delivery platform connecting users to local restaurants using real-time tracking and seamless ordering',
    image: '/icons/Dine-and-Dash.png',
    link: '/'
  },
  {
    title: 'School Pay App',
    description: 'A secure payment platform designed for schools, enabling parents to easily manage and track tuition fees, extracurricular payments, and other school expenses in a convenient and user-friendly way.',
    image: '/icons/school-pay.png',
    link: ''
  },
];

const Projects = () => (
  <div className="wrapper py-16" id="projects">
    <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">Projects</h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <li
          key={index}
          className="relative group text-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={project.image}
            alt={project.title}
          />
          <div className="p-5">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h4>
              <p className="text-sm text-gray-500">{project.description}</p>
            </a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
