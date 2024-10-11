import React from 'react';

const socialLinks = [
  { name: 'X', link: 'https://x.com/rupesh99201', icon: '/icons/icons8-x.svg' },
  { name: 'GitHub', link: 'https://github.com/DevRoopeshSingh', icon: '/icons/icons8-github.svg' },
  { name: 'DEV Community', link: 'https://dev.to/devroopeshsingh', icon: '/icons/icons8-dev-community.svg' },
];

const SocialLinks = () => (
  <div className="wrapper py-16" id="social">
    <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">Connect with Me</h3>
    <ul className="flex flex-wrap justify-center gap-10">
      {socialLinks.map((social, index) => (
        <li
          key={index}
          className="group flex items-center justify-center rounded-full p-2 shadow-lg bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
          style={{ width: '80px', height: '80px' }}
        >
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
