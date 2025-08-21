import { PerspectiveCamera, OrbitControls  } from '@react-three/drei'
import { useControls } from 'leva'

export default function camera()
{

        // const { posX, posY, posZ, fov } = useControls('Camera', {
        // posX: { value: 0, min: -50, max: 50, step: 0.1 },
        // posY: { value: 0, min: -50, max: 50, step: 0.1 },
        // posZ: { value: 23, min: -50, max: 50, step: 0.1 },
        // fov: { value: 45, min: 10, max: 100, step: 1 },
        // }) 

    return <>
            <PerspectiveCamera
                makeDefault
                fov={45}
                near={0.1}
                far={200}
                position={[0, 0, 23]}
            />

        <OrbitControls 
            target={[0, 4, 0]}
            enablePan={false}
            minDistance={12}
            maxDistance={30}
            maxPolarAngle={Math.PI / 2.5} 
        />
        
    </>
}