import { BakeShadows, GizmoViewport } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Model } from './Model'
import Lights from './Lights.jsx'
import Camera from './Camera.jsx'

export default function Experience() 
{

    return <> 
        <Perf position="top-left" /> 

        <Camera />
        <Lights />
        {/* <GizmoViewport /> */}
  
        <Model/>
        <BakeShadows />
    </>
}