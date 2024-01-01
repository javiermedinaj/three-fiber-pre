import React from 'react';
import Hero from './components/Hero';
import Who from './components/Who';
import Footer from './components/Footer';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div className='px-0'>
        <Navbar /> 
       {/* <Hero />  */}
      <Who /> 
      <Footer/>
    </div>
      
    </>
  );
}

export default App;
