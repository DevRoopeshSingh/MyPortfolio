import React, { Suspense } from 'react';
import './App.css';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components for better performance
const Stats = React.lazy(() => import('./components/Stats'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const SocialLinks = React.lazy(() => import('./components/SocialLinks'));
const Contact = React.lazy(() => import('./components/Contact'));
const ResumeDownload = React.lazy(() => import('./components/ResumeDownload'));
const Footer = React.lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        <Hero />
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <Suspense fallback={<LoadingSpinner />}>
            <Stats />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <SocialLinks />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <ResumeDownload />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
