import React, { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";


const Who = () => {
  
  return (
    <div className="bg-gray-300 dark:bg-gray-900 dark:text-white">
      <div className="h-screen flex justify-between items-center mx-8 lg:mx-0">
        <div className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-120 xl:h-120">
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 2, 1]} />
            <Suspense fallback={null}>
              <Cube scale={[10, 10, 10]} />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>
        <div className=" flex-1 flex flex-col justify-center gap-20 lg:text-center ">
          <div>
            <h1 className="text-2xl lg:text-2xl ">Think outside the square space</h1>
          </div>
         
          <p className="text-black text-lg lg:text-2xl mb-6 dark:text-white">
            A creative group of designers and developers with a passion for the arts.
          </p>
          <div className="flex justify-center mb-2">
            <button className="text-purple-500 bg-purple-100 px-4 py-2 rounded dark:bg-purple-800 dark:text-white">Who we Are</button>
             </div>
        </div>
      </div>
    </div>
  );
};


export default Who;
