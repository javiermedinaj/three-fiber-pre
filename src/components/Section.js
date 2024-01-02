import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Pc from "./Mesh/Pc_vintaje";
import Scene from "./Mesh/Scene";
import Coffe from "./Mesh/Coffe";

const Card = ({ title, description, children }) => (
  <div className="max-w-md mt-10 mb-20 my-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <div className="aspect-w-1 aspect-h-1">
      <Canvas
        resize={{ polyfill: ResizeObserver }} // Asegura que la escena se ajusta al cambiar el tamaño de la ventana
        camera={{
          position: [10, 10, 10],
          fov: 25,
        }}
        className="w-full max-h-72" // Ajusta el ancho y la altura máxima del Canvas
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} intensity={1} />
        <Suspense fallback={null}>
          {children}
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </div>
    <h2 className="text-xl font-semibold mt-4">{title}</h2>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

const Section = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8 lg:mx-0">
        <Card title="Diseño 3D 1" description="Descripción del modelo 1">
          <Pc scale={[0.2, 0.2, 0.2]} position={[0, -1, 0]} />
        </Card>

        <Card title="Diseño 3D 2" description="Descripción del modelo 2">
          <Scene scale={[0.2, 0.2, 0.2]} position={[0, -1, 0]} />
        </Card>

        <Card title="Diseño 3D 2" description="Descripción del modelo 2">
          <Coffe scale={[0.2, 0.2, 0.2]} position={[0, -1, 0]} />
        </Card>

        {/* Agrega más tarjetas según sea necesario */}
      </div>
    </div>
  );
};

export default Section;
