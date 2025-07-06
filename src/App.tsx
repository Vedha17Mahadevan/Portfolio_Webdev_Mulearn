import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Events from './components/Events';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import FloatingElements from './components/FloatingElements';

function App() {
  useEffect(() => {
    document.title = 'Vedha Mahadevan | Digital Storyteller';
  }, []);

  return (
    <div className="min-h-screen bg-beige-200 relative overflow-x-hidden">
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Events />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;