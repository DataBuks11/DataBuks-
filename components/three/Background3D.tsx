import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = ({ color = '#6366f1' }: { color?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <TorusKnot ref={meshRef} args={[10, 3, 100, 16]} scale={0.25}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.8}
          wireframe={true}
        />
      </TorusKnot>
    </Float>
  );
};

const Background3D: React.FC<{ className?: string, color?: string }> = ({ className, color }) => {
  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none opacity-20 ${className}`}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedShape color={color} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Background3D;
