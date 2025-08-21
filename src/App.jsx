import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { StrictMode, useState } from 'react'

export default function App() 
{

  const [openModal, setOpenModal] = useState(null)

   console.log("📌 Estado actual del modal:", openModal)

  return (
    <>
      <StrictMode>
        <Canvas dpr={ [ 1, 2 ] } shadows >
          <Experience setOpenModal={setOpenModal} />
        </Canvas>
      </StrictMode>

      {openModal === 'tree' && (
        <div className='modal'>
          <section>
          <h2> De la Idea al Deploy: El Viaje de un Diorama 3D </h2>
          </section>

          <button onClick={() => setOpenModal(null)}>Cerrar</button>
        </div>
      )}
    </>
  )
}
