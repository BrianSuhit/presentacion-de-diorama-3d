import { PerspectiveCamera, OrbitControls  } from '@react-three/drei'

export default function camera()
{
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
            maxDistance={35}
            maxPolarAngle={Math.PI / 2.5} 
        />
        
    </>
}