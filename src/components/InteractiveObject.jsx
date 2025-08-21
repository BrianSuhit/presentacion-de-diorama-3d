import { useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'

export default function InteractiveObject({ onSelect })
{
    const model = useGLTF('./models/tree.glb')

    const tree = useRef()

    const [hovered, setHovered] = useState(false)

    return <>
        <primitive  
            object={model.scene} 
            onClick={() => {
                console.log("👉 Árbol clickeado")
                onSelect("tree")
            }}
            onPointerEnter={() => setHovered(true, document.body.style.cursor = 'pointer')} 
            onPointerLeave={() => setHovered(false, document.body.style.cursor = 'default')}
            ref={tree} 
            scale={hovered ? 2.2 : 2}
            position={[0.3,4,-3]}
        />
    </>
}