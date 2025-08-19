import { useHelper, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import * as THREE from 'three'
import { Model } from './Model'

export default function Experience() 
{

    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1, 'red')

    return <>
         
        <Perf position="top-left" /> 
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2}/>


        <directionalLight
            ref={ directionalLight }
            castShadow 
            position={ [ 1, 2, 3 ] } 
            intensity={ 4.5 }
            shadow-normalBias={ 0.04 }
        />
        <ambientLight intensity={1.5} />


        <Model />

        <mesh receiveShadow rotation-x={ - Math.PI * 0.5 } scale={ 50 }>
            <planeGeometry />
            <meshStandardMaterial color="#a7f070" />
        </mesh>

    </>
}