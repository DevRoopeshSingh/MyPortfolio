import React from 'react';
import { FaBriefcase, FaBuilding, FaAward, FaGraduationCap, FaCodeBranch, FaMedal } from 'react-icons/fa';

const Stats = () => (
  <ul className="stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mx-auto max-w-4xl">
    <li className="flex flex-col items-center bg-red-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <FaBriefcase className="text-red-400 text-4xl mb-3" />
      <h2 className="text-3xl font-bold mb-2">7+ years</h2>
      <p className="text-gray-600">Professional Experience</p>
    </li>
    <li className="flex flex-col items-center bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <FaBuilding className="text-green-400 text-4xl mb-3" />
      <h2 className="text-3xl font-bold mb-2">Pincler</h2>
      <p className="text-gray-600">Current Company</p>
    </li>
    <li className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <FaMedal className="text-blue-400 text-4xl mb-3" />
      <h2 className="text-3xl font-bold mb-2">Innovative Development Excellence</h2>
      <p className="text-gray-600">Award from Traform, Inc.</p>
    </li>
    <li className="flex flex-col items-center bg-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <FaGraduationCap className="text-purple-400 text-4xl mb-3" />
      <h2 className="text-3xl font-bold mb-2">Bachelor's in CS</h2>
      <p className="text-gray-600">University of Mumbai</p>
    </li>
    <li className="flex flex-col items-center bg-yellow-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <FaCodeBranch className="text-yellow-400 text-4xl mb-3" />
      <h2 className="text-3xl font-bold mb-2">Full Stack Expertise</h2>
      <p className="text-gray-600">Frontend & Backend Development</p>
    </li>
    <li className="flex flex-col items-center bg-indigo-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <FaAward className="text-indigo-400 text-4xl mb-3" />
      <h2 className="text-3xl font-bold mb-2">5+ Major Projects</h2>
      <p className="text-gray-600">Delivered Across Industries</p>
    </li>
  </ul>
);

export default Stats;
