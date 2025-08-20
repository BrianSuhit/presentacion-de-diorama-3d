import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

export default function camera()
{

    const { posX, posY, posZ, fov } = useControls('Camera', {
    posX: { value: 0.0, min: -50, max: 50, step: 0.1 },
    posY: { value: 5, min: -50, max: 50, step: 0.1 },
    posZ: { value: 25, min: -50, max: 50, step: 0.1 },
    fov: { value: 45, min: 10, max: 100, step: 1 }
  })

    return <>

        <PerspectiveCamera
            makeDefault
            fov={fov}
            near={0.1}
            far={200}
            position={[posX, posY, posZ]}
        />


        <OrbitControls
            maxPolarAngle={Math.PI / 2.5}
            // enablePan={false}
            minDistance={10}
            maxDistance={40}
            />
    </>
}