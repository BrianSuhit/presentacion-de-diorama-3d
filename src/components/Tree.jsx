import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'

export const TreeInteractive = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./models/tree.glb')
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Vert002.geometry} material={materials.wood} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert002_1.geometry}
        material={materials.grass}
      />
    </group>
  )
})

useGLTF.preload('/tree.glb')
