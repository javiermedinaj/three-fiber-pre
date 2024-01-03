import React from "react";


const Hero = () => (
  <div className="bg-gray-200 h-screen flex flex-col justify-center items-center scroll-snap-align-center dark:bg-gray-900 dark:text-white">
    <div className="w-full max-w-xl mx-auto">
      <div className="flex-2 flex flex-col justify-center gap-6 items-center md:flex md:items-start">
        <h1 className="text-4xl md:text-6xl text-center">Think. Make. Solve.</h1>
        {/* <div className="flex items-center justify-center gap-2">
          <h2 className="text-purple-500">What we Do</h2>
        </div> */}
        <p className="mt-20 text-xl text-gray-800 text-center dark:text-gray-300">
        Immerse yourself in a universe where creativity meets innovation. Our team of 3D designers combines advanced technical skills with a boundless passion for visual aesthetics. From modeling to lighting and animation, each project is a unique masterpiece.        </p>
        {/* <button className="bg-purple-500 text-white font-semibold w-32 py-2 rounded-md mx-auto">
          Learn More
        </button> */}
      </div>
     
    </div>
  </div>
);

export default Hero;
