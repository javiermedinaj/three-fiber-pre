import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Pc from "./Mesh/Pc_vintaje";
import Scene from "./Mesh/Scene";
import Coffe from "./Mesh/Coffe";

const Card = ({ title, description, link, children }) => (
  <div className=" text-center max-w-md ml-4 mt-10 mb-20 my-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
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
    <a
      href={link}  // Utiliza la propiedad link aquí
      className="block mt-4 text-sm text-blue-500 hover:underline"
    >
      Ver modelo 3D
    </a>
  </div>
);

const Section = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8 lg:mx-0">
        <Card title="Pc vintaje" description="Design made by rondon" link= "#" >
          <Pc scale={[1, 0.8, 1]} position={[0, 0, -1]} />
        </Card>

        <Card title="Model" description="Design made by rondon" link= "#">
          <Scene scale={[1, 0.8, 1]} position={[0, -3, -2]} />
        </Card>

        <Card title="Coffe" description="Design made by rondon" link= "#">
          <Coffe scale={[1.8, 1.3, 1.3]} position={[1, -2, 0]} />
        </Card>

       
      </div>
    </div>
  );
};

export default Section;
