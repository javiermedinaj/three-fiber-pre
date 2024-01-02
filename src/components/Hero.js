import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Pc from "./Mesh/Pc_vintaje";

const Hero = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 dark:text-white">
      <div className="h-screen flex flex-col justify-center items-center mx-8 lg:mx-0">
        <div className="w-full h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-120 xl:h-120">
          <Canvas camera={{ position: [5, 10, 5], fov: 25 }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[3, 2, 3]} />
            <Suspense fallback={null}>
              {/* Ajusta la posición del modelo para centrarlo */}
              <Pc position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>
        {/* Agrega un contenedor para el texto */}
        <div className="text-center mt-4">
          <h1 className="text-2xl lg:text-2xl ">Think outside the square space</h1>
          <button className="text-purple-500 bg-purple-100 px-4 py-2 rounded dark:bg-purple-800 dark:text-white">Who we Are</button>
          <p className="text-black text-lg lg:text-2xl mb-6 dark:text-white">
            A creative group of designers and developers with a passion for the arts.
          </p>
          <button className="text-purple-500 bg-purple-100 px-4 py-2 rounded dark:bg-purple-800 dark:text-white">Who we Are</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
