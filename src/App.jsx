import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import YTSection from "./components/Youtube/YTSection"
import Members from "./components/Members/Members"
import Footer from "./components/Footer"
import './App.css';
import { useEffect } from "react";

function App() {
  // Implement smooth scrolling
  useEffect(() => {
    const smoothScroll = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // 80px offset for navbar
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (   
    <div className="w-full">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="members">
        <Members />
      </section>
      <section id="youtube">
        <YTSection />
      </section>
      <Footer />
    </div>
  )
}

export default App
