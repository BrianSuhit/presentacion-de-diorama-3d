import { useRef, useState } from 'react'
import { TreeInteractive } from './Tree'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function InteractiveObject({ onSelect })
{
    const tree = useRef()

    const [hovered, setHovered] = useState(false)

    useFrame((state, delta) =>
        {
            if (!tree.current) return;
            const targetScale = hovered ? 2.3 : 2

             tree.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 10)
        })

    return <>
        <TreeInteractive 
            position={[2.6, 4, 1]} 
            rotation-y={-90}
            ref={tree}
            onClick={() => {
                onSelect("tree")
            }}
            onPointerEnter={() => setHovered(true, document.body.style.cursor = 'pointer')} 
            onPointerLeave={() => setHovered(false, document.body.style.cursor = 'default')}
            />
    </>
}