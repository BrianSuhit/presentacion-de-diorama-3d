import { BakeShadows, Center, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Model } from './Model'
import Lights from './Lights.jsx'

export default function Experience() 
{

    return <> 
        <Perf position="top-left" /> 
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2.5}/>

        <color attach="background" args={["#ececec"]} />

        <Lights />

        <Center>
        <Model />
        <mesh receiveShadow rotation-x={ - Math.PI * 0.5 } scale={ 20 }>
            <planeGeometry />
            <meshStandardMaterial color="#ececec" />
        </mesh>
        </Center>
        <BakeShadows />
    </>
}