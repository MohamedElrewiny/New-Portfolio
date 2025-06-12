'use client';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Qualification from './Qualification/Qualification';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import Home from './Home/Home';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Scroll event listener for section detection
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300  bg-gray-900 text-gray-100`}>
      {/* <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} /> */}
      <Header activeSection={activeSection} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Home/>
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
