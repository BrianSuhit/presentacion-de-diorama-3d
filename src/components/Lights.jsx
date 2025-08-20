import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Lights()
{
    const directionalLight = useRef()
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, 'blue')
    
    return <>
    
        <directionalLight
            ref={ directionalLight }
            castShadow
            position={[5, 8, 5]}
            intensity={ 1.5 }
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.1}
            shadow-camera-far={30}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            shadow-bias={-0.01}
            shadow-normalBias={ 0.04 }
        />

        <ambientLight intensity={1.5} />
    </>
}