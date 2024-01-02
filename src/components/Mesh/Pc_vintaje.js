import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Pc(props) {
  const { nodes, materials } = useGLTF('/pc.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={[1.51, 1.314, 0.245]}>
        <mesh geometry={nodes.Cubo003_1.geometry} material={materials.BLANCO} />
        <mesh geometry={nodes.Cubo003_2.geometry} material={materials.GRIS} />
        <mesh geometry={nodes.Cubo003_3.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cubo003_4.geometry} material={materials['Material.004']} />
      </group>
      <mesh geometry={nodes.LUZ_ENCENDIDO.geometry} material={materials['Material.001']} position={[1.071, -1.149, 0.24]} scale={[0.019, 0.018, 0.017]} />
      <group position={[0, -1.715, -0.675]} scale={[1.707, 0.4, 1]}>
        <mesh geometry={nodes.Cubo006_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cubo006_2.geometry} material={materials.BLANCO} />
      </group>
      <mesh geometry={nodes.MESA.geometry} material={materials['Material.005']} position={[1.062, -2.226, -0.454]} scale={[7.813, 0.09, 5.4]} />
      <mesh geometry={nodes.WINDOWS.geometry} material={materials.pngegg} position={[-1.106, -1.053, 0.266]} rotation={[Math.PI / 2, 0, 0]} scale={0.402} />
      <mesh geometry={nodes.BLENDER.geometry} material={materials['kisspng-blender-3d-computer-graphics-rendering-autodesk-ma-blen']} position={[1.355, 1.215, 0.247]} rotation={[Math.PI / 2, 0.401, 0]} scale={0.164} />
      <mesh geometry={nodes.COMPQ.geometry} material={materials['pngegg(1)']} position={[0, -1.081, 0.286]} rotation={[Math.PI / 2, 0, 0]} scale={0.104} />
      <mesh geometry={nodes.Cubo.geometry} material={materials.BLANCO} position={[-0.125, -2.069, 1.724]} scale={[1.581, 0.052, 0.498]} />
      <mesh geometry={nodes.Cubo001.geometry} material={nodes.Cubo001.material} position={[-0.837, -2.277, 1.514]} scale={[0.073, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo002.geometry} material={materials.Material} position={[-0.795, -2.277, 1.701]} scale={[0.073, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo003.geometry} material={materials.BLANCO} position={[-0.698, -2.277, 1.892]} scale={[0.073, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo004.geometry} material={nodes.Cubo004.material} position={[-0.937, -2.277, 1.327]} scale={[0.073, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo005.geometry} material={materials.GRIS} position={[-1.547, -1.997, 2.095]} scale={[0.091, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo006.geometry} material={materials.GRIS} position={[1.322, -1.986, 2.09]} scale={0.072} />
      <mesh geometry={nodes.Cubo007.geometry} material={materials.GRIS} position={[-1.445, -1.997, 1.901]} scale={[0.17, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo008.geometry} material={materials.GRIS} position={[-1.516, -1.997, 1.523]} scale={[0.115, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo009.geometry} material={materials.GRIS} position={[-1.494, -1.997, 1.711]} scale={[0.134, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo010.geometry} material={materials['Material.018']} position={[-0.337, -1.997, 2.093]} scale={[0.485, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo011.geometry} material={materials.GRIS} position={[0.382, -1.986, 2.093]} scale={0.072} />
      <mesh geometry={nodes.Cubo012.geometry} material={materials['GRIS.002']} position={[1.127, -1.986, 1.902]} scale={0.072} />
      <mesh geometry={nodes.Cubo013.geometry} material={materials['Material.020']} position={[0.846, -1.986, 1.901]} scale={[0.136, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo014.geometry} material={nodes.Cubo014.material} position={[0.995, -1.986, 1.71]} scale={[0.177, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo015.geometry} material={materials.GRIS} position={[1.021, -1.986, 1.337]} scale={[0.157, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo016.geometry} material={nodes.Cubo016.material} position={[1.07, -1.986, 1.523]} scale={[0.118, 0.072, 0.072]} />
      <mesh geometry={nodes.Cubo017.geometry} material={materials['GRIS.001']} position={[-1.565, -1.986, 1.339]} scale={0.072} />
      <mesh geometry={nodes.Texto.geometry} material={materials['Material.021']} position={[-1.605, -1.881, 1.344]} scale={0.048} />
      <mesh geometry={nodes.Texto001.geometry} material={materials['Material.022']} position={[0.858, -1.797, 1.897]} scale={0.07} />
    </group>
  )
}

useGLTF.preload('/pc.gltf')
