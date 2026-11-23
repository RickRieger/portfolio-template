import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/section/Navbar';
import Hero from './components/section/Hero';
import About from './components/section/About';
import Experience from './components/section/Experience';
import Cloud from './components/section/Cloud';
import Projects from './components/section/Projects';
import Contact from './components/section/Contact';
import Footer from './components/section/Footer';
import { animation } from './profile';

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
      offset: 60,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Cloud />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
