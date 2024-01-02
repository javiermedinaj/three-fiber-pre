import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Who from "./components/Who";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="px-0">
        <Navbar />
        <Hero />
        <Section/>
        <Who />
        <Footer />
      </div>
    </>
  );
}

export default App;
