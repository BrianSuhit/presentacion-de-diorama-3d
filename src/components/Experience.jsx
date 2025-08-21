import { BakeShadows } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Model } from './Model'
import Lights from './Lights.jsx'
import Camera from './Camera.jsx'
import InteractiveObject from './InteractiveObject.jsx'

export default function Experience({setOpenModal}) 
{
    return <> 
        <Perf position="top-left" /> 

        <Camera />
        <Lights />
        <Model />
        <InteractiveObject onSelect={setOpenModal}/>
        <BakeShadows />
    </>
}