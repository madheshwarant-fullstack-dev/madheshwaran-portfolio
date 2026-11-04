import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function WorldTransitionArena({ position = [0, 0, -126], isMobile = false }) {
  const portalRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (portalRef.current) {
      portalRef.current.rotation.z += delta * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * 0.2;
    }
  });

  const scale = isMobile ? 0.75 : 1.0;

  return (
    <group position={position} scale={scale}>
      {/* 1. HIGH-GLOSS REFLECTIVE DIGITAL ARENA FLOOR */}
      <mesh position={[0, -3.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[45, 45]} />
        <meshPhysicalMaterial
          color="#08090B"
          metalness={0.92}
          roughness={0.12}
          reflectivity={0.95}
          clearcoat={0.9}
        />
      </mesh>

      {/* Cyber Grid over floor */}
      <group position={[0, -3.18, 0]}>
        <gridHelper args={[45, 45, '#287BFF', '#15191F']} />
      </group>

      {/* 2. TWIN CYBER ARCHITECTURAL MONOLITHS */}
      {[-7.5, 7.5].map((x, idx) => (
        <group key={idx} position={[x, 0, 0]}>
          {/* Monolith Pillar */}
          <mesh>
            <boxGeometry args={[0.8, 8.5, 0.8]} />
            <meshPhysicalMaterial
              color="#15191F"
              metalness={0.9}
              roughness={0.2}
              clearcoat={0.6}
            />
          </mesh>
          {/* Vertical Neon Light Strip */}
          <mesh position={[idx === 0 ? 0.42 : -0.42, 0, 0]}>
            <boxGeometry args={[0.04, 8.4, 0.1]} />
            <meshBasicMaterial color="#287BFF" />
          </mesh>
        </group>
      ))}

      {/* 3. ROTATING CYBERNETIC GATEWAY PORTAL BEHIND TEXT */}
      <group position={[0, 0.8, -4]}>
        {/* Outer Hexagonal Ring */}
        <mesh ref={portalRef}>
          <ringGeometry args={[4.2, 4.3, 6]} />
          <meshBasicMaterial color="#287BFF" transparent opacity={0.65} side={THREE.DoubleSide} />
        </mesh>

        {/* Inner Gyroscope Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[3.4, 3.48, 32]} />
          <meshBasicMaterial color="#C6CAD0" transparent opacity={0.45} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* 4. GRAND 3D TITLES (WORLD TRANSITION CULMINATION) */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Small Intro Pill / Header */}
        <Text
          position={[0, 2.6, 0]}
          fontSize={0.28}
          color="#8B929E"
          letterSpacing={0.28}
          anchorX="center"
          anchorY="middle"
        >
          // ALL SYSTEMS OPERATIONAL
        </Text>

        <Text
          position={[0, 1.85, 0]}
          fontSize={0.52}
          color="#C6CAD0"
          letterSpacing={0.15}
          anchorX="center"
          anchorY="middle"
        >
          ENTERING THE WORLD OF
        </Text>

        <Text
          position={[0, 0.95, 0]}
          fontSize={1.1}
          color="#FAF9F6"
          letterSpacing={0.08}
          anchorX="center"
          anchorY="middle"
        >
          MADHESHWARAN
        </Text>

        <Text
          position={[0, 0.15, 0]}
          fontSize={0.34}
          color="#287BFF"
          letterSpacing={0.22}
          anchorX="center"
          anchorY="middle"
        >
          FREELANCE FULL STACK DEVELOPER
        </Text>

        <Text
          position={[0, -0.65, 0]}
          fontSize={0.24}
          color="#8B929E"
          letterSpacing={0.12}
          anchorX="center"
          anchorY="middle"
        >
          MERN STACK • THREE.JS • PRODUCTION ARCHITECTURES
        </Text>
      </Float>

      {/* 5. GLOWING ENERGY BEAMS SHOOTING UPWARD */}
      {[-4, 4].map((x, idx) => (
        <mesh key={idx} position={[x, 3, -1]}>
          <cylinderGeometry args={[0.02, 0.02, 14, 8]} />
          <meshBasicMaterial color="#287BFF" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}
