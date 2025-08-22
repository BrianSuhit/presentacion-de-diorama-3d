import { BakeShadows } from '@react-three/drei'
import { Model } from './Model'
import Lights from './Lights.jsx'
import Camera from './Camera.jsx'
import InteractiveObject from './InteractiveObject.jsx'

export default function Experience({setOpenModal}) 
{
    return <> 
        <Camera />
        <Lights />
        <Model />
        <InteractiveObject onSelect={setOpenModal}/>
        <BakeShadows />
    </>
}