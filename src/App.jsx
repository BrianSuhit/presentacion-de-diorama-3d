import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { StrictMode } from 'react'

export default function App() 
{
  return (
    <StrictMode>
      <Canvas dpr={ [ 1, 2 ] } shadows camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }} >
        <Experience />
      </Canvas>
    </StrictMode>
  )
}
