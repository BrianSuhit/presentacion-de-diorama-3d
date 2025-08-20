import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./models/diorama.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Circle.geometry} material={materials.tower} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_1.geometry}
        material={materials.rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_2.geometry}
        material={materials.grass}
      />
      <mesh castShadow receiveShadow geometry={nodes.Circle_3.geometry} material={materials.roof} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_4.geometry}
        material={materials.roof_deco}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_5.geometry}
        material={materials.window}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_6.geometry}
        material={materials.window_frame}
      />
      <mesh castShadow receiveShadow geometry={nodes.Circle_7.geometry} material={materials.wood} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_8.geometry}
        material={materials.background}
      />
    </group>
  )
}

useGLTF.preload('/diorama.glb')


