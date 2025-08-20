import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { StrictMode } from 'react'

export default function App() 
{
  return (
    <StrictMode>
      <Canvas dpr={ [ 1, 2 ] } shadows >
        <Experience />
      </Canvas>
    </StrictMode>
  )
}
