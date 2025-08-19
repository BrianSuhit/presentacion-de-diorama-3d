import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

export default function Experience() 
{
    return <>

        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <mesh>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

    </>
}