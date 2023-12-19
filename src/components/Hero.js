import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero = () => {
  const controls = useRef();

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="h-full flex flex-col-reverse lg:flex-row justify-between items-center mx-8 lg:mx-0">
        <div className="flex-1 flex flex-col justify-center gap-4 lg:flex-2 lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">Think. Make. Solve.</h1>
          <div className="flex items-center gap-2">
            <h2 className="text-purple-500 text-lg md:text-xl lg:text-2xl">What we Do</h2>
          </div>
          <p className="text-gray-300 text-base md:text-lg lg:text-2xl">
            We enjoy creating delightful, human-centered digital experiences.
          </p>
          <button className="bg-purple-500 text-white font-semibold px-4 py-2 rounded cursor-pointer">
            Learn More
          </button>
        </div>
        <div className="flex-3 relative lg:flex-1 mt-8 lg:mt-0">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls
                ref={controls}
                enableZoom={false}
                enableRotate={false}
                maxPolarAngle={Math.PI / 3} // Ángulo máximo en radianes
                minPolarAngle={Math.PI / 3} // Ángulo mínimo en radianes
                options={{ passive: true }}
              />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img
            src="./img/moon.png"
            alt="moon"
            className="w-20 h-20 object-contain absolute top-0 bottom-0 left-0 right-0 m-auto lg:w-300 lg:h-300 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
