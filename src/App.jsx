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

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Stats />
        <Skills />
        <SocialLinks />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
