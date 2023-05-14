import './App.css';
import Header from './components/header';
import Hero from  './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Blogs from './components/blogs';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
      return (
        <>
          <Header/>
           <Hero/>
          <About/>
          <Projects/>
          <Blogs/>
          <Contact/>
         <Footer/> 
        </>
    );
} 

export default App;
