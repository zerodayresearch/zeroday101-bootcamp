import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Instructors from './components/Instructors';
import Pricing from './components/Pricing';
import TargetAudience from './components/TargetAudience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Curriculum />
      <Instructors />
      <Pricing />
      <TargetAudience />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;