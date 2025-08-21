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
      
      {openModal === 'tree' && 
      (
        <div className="modal"> 
          <div className='modal__content'>

            <header className='modal__header'>
              <h2 className='modal__title'> De la Idea al Deploy: El Viaje de un Diorama 3D </h2>
            </header>

            <section className="modal-section">
              <h3 className='modal-section__title'>Concepto e Inspiración</h3>
              <p>
                La idea era crear un diorama 3D interactivo que sirva como una pieza central de portafolio y, a la vez, como una plantilla reutilizable para futuros proyectos en React Three Fiber.<b/>
                Me inspiré en el arte low-poly de juegos como 'Monument Valley' y en el trabajo de artistas como 'Polygon Runway'.
              </p>
              <h4 className='modal-section__subtitle'>Herramientas Utilizadas:</h4>
              <ul className="tool-list">
                <li className="tool-list__item">Blender</li>
                <li className="tool-list__item">React</li>
                <li className="tool-list__item">Three.js</li>
                <li className="tool-list__item">React Three Fiber</li>
                <li className="tool-list__item">Drei</li>
                <li className="tool-list__item">Leva</li>
              </ul>
            </section>

            {/* SECTION 2 */}
            <section className="modal-section">
              <h3 className='modal-section__title'>Modelado en Blender</h3>
              <p>
                El diorama fue creado desde cero en Blender, utilizando técnicas de modelado low-poly para mantener un estilo limpio y un rendimiento óptimo.
              </p>
              
              <h4 className='modal-section__subtitle'>Optimización Previa</h4>
              <ul className="feature-list">
                <li className="feature-list__item">
                  <strong>Reducción de Polígonos:</strong> Eliminación de caras y vértices que nunca son visibles, reduciendo la carga en la GPU.
                </li>
                <li className="feature-list__item">
                  <strong>Unificación de Mallas (Join):</strong> Todos los elementos estáticos del diorama (torre, rocas, suelo) se unieron en un solo objeto para minimizar los 'draw calls'.
                </li>
                <li className="feature-list__item">
                  <strong>Centro y Escala:</strong> El modelo fue centrado en el origen del mundo (0,0,0) y sus transformaciones fueron "aplicadas" para asegurar que se importe de forma predecible y "Ready To Use".
                </li>
              </ul>
              <p>
                <strong>Exportación:</strong> El modelo final se exportó en formato <code>.glb</code>, el estándar para la web.
              </p>
            </section>

            {/* SECTION 3 */}
            <section className="modal-section">
              <h3 className='modal-section__title'>Programación con React Three Fiber</h3>
              <p>
                El primer paso en el código fue convertir el archivo <code>.glb</code> en un componente de React reutilizable usando <code>gltfjsx</code>. Esto me dio acceso a cada pieza del modelo de forma declarativa, permitiendo aplicar sombras y eventos de forma precisa.
              </p>

              <h4 className='modal-section__subtitle'>Estructura de Componentes</h4>
              <p>La escena se organizó en componentes lógicos y reutilizables para un código limpio y mantenible:</p>
              <ul className="feature-list">
                <li className="feature-list__item">
                  <code>&lt;Experience /&gt;</code>: Componente principal que envuelve toda la escena 3D.
                </li>
                <li className="feature-list__item">
                  <code>&lt;Model /&gt;</code>, <code>&lt;InteractiveObject /&gt;</code>: Componentes que encapsulan los modelos 3D y su lógica de interacción.
                </li>
                <li className="feature-list__item">
                  <code>&lt;Lights /&gt;</code>: Un componente dedicado para toda la configuración de la iluminación (Directional, Ambient).
                </li>
                <li className="feature-list__item">
                  <code>&lt;Camera /&gt;</code>: Un componente para la cámara y los controles (OrbitControls), permitiendo una configuración inicial perfecta.
                </li>
              </ul>

              <h4 className='modal-section__subtitle'>Iluminación y Sombras</h4>
              <p>
                Se configuró un sistema de iluminación manual con una <code>directionalLight</code> para proyectar sombras. La clave fue ajustar el <code>shadow-bias</code> para eliminar artefactos visuales (<strong>shadow acne</strong>) y darle un acabado profesional.
              </p>
              <p>
                También se utilizó <code>&lt;BakeShadows /&gt;</code> para reducir las llamadas a la GPU y mejorar el rendimiento, ya que el diorama es estático.
              </p>

              <h4 className='modal-section__subtitle'>Interactividad</h4>
              <p>
                La interactividad se logró con los hooks de React. Un estado <code>useState</code> controla la escala del árbol al pasar el ratón (<code>onPointerEnter</code>/<code>onPointerLeave</code>), y el evento <code>onClick</code> se utiliza para disparar la apertura de este mismo modal, conectando el mundo 3D con la interfaz 2D.
              </p>
            </section>



            <button className="modal__close-button" onClick={() => setOpenModal(null)}>×</button>

          </div>
        </div>
      )}
    </>
  )
}
