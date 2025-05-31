import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ResumeDownload from './components/ResumeDownload';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SocialLinks />
        <Contact />
      </div>
      <ResumeDownload />
      <Footer />
    </div>
  );
}

export default App;
