
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Coffe(props) {
  const { nodes, materials } = useGLTF('/coffe.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-2.025, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 1.682, 0]} scale={[1.248, 1.677, 1.228]}>
            <group position={[0, 0.273, 0]} scale={[0.801, 0.596, 0.814]}>
              <mesh geometry={nodes.Object_5.geometry} material={materials.BLACK_PLASTIC} />
              <mesh geometry={nodes.Object_6.geometry} material={materials.BLACK_PLASTIC} />
            </group>
            <group position={[0, 0.886, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.801, 0.814, 0.596]}>
              <mesh geometry={nodes.Object_11.geometry} material={materials['BLACK_PLASTIC.001']} position={[0, 0, 1.027]} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
            <mesh geometry={nodes.Object_8.geometry} material={materials.PAPER2} position={[0, 0.273, 0]} scale={[0.801, 0.596, 0.814]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/coffe.gltf')
