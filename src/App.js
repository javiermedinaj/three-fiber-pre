import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Who from "./components/Who";
import Team from './components/Team';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="px-0">
        <Navbar />
        <Hero />
        <Who />
        <Section/>
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default App;
