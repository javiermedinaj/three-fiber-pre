import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero = () => (
  <div className="h-screen flex flex-col justify-center items-center scroll-snap-align-center">
    <div className="w-full max-w-xl mx-auto">
      <div className="flex-2 flex flex-col justify-center gap-6 items-center md:flex md:items-start">
        <h1 className="text-4xl md:text-6xl text-center">Think. Make. Solve.</h1>
        {/* <div className="flex items-center justify-center gap-2">
          <h2 className="text-purple-500">What we Do</h2>
        </div> */}
        <p className="text-xl text-gray-300 text-center">
          We enjoy creating delightful, human-centered digital experiences.
        </p>
        <button className="bg-purple-500 text-white font-semibold w-32 py-2 rounded-md mx-auto">
          Learn More
        </button>
      </div>
      <div className="flex-3 relative">
        <Canvas className="w-full">
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.2}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
        {/* <img
          src="./img/moon.png"
          alt="Moon"
          className="w-20 h-30 object-contain absolute top-0 bottom-0 left-0 right-0 m-auto animate__animated animate__animate__alternate animate__animate__ease"
        /> */}
      </div>
    </div>
  </div>
);

export default Hero;
