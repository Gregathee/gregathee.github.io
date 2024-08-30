import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Plane } from '@react-three/drei';
import { Mesh } from 'three'; 
import Layout from '../components/Layout';

const InteractiveResumePage = () => {
    const mesh = useRef<Mesh>(null!);

    return (
        <Layout>
            <h1>Interactive Resume</h1>
            <Canvas style={{ background: 'gray', height: '70vh' }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box ref={mesh} args={[1, 1, 1]} position={[0, 1, 0]}>
                    <meshStandardMaterial attach="material" color="orange" />
                </Box>
                <RotationEffect mesh={mesh} />
                <Plane args={[1000, 1000]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}> 
                    <meshStandardMaterial attach="material" color="green" />
                </Plane>
            </Canvas>
        </Layout>
    );
};

const RotationEffect = ({ mesh }: { mesh: React.MutableRefObject<Mesh> }) => { // Specify the type for mesh prop
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.01;
        }
    });

    return null;
};

export default InteractiveResumePage;
