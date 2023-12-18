import React from 'react';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-900 min-h-screen scroll-snap-type-y scroll-behavior-smooth overflow-y-auto scrollbar-none text-black">
      <Navbar />
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
