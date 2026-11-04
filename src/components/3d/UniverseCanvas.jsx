import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import CodingTunnel from './CodingTunnel';
import WorldTransitionArena from './WorldTransitionArena';

function CameraFlightController({ scrollProgress = 0, isMobile = false }) {
  const cameraRef = useRef();
  const currentPos = useRef(new THREE.Vector3(0, 0, 7));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    // Target Z position based on scroll progress (0.0 to 1.0)
    // 0.0 -> z = 7 (Hero)
    // 0.15 -> z = -15 (Sector 01: Coding World Entrance)
    // 0.28 -> z = -35 (Sector 02: React Atomic Symbol)
    // 0.42 -> z = -56 (Sector 03: Node.js Hex Prism)
    // 0.56 -> z = -76 (Sector 04: MongoDB Data Crystal)
    // 0.70 -> z = -94 (Sector 05: Git & Deploy Node Matrix)
    // 0.84 -> z = -110 (Sector 06: Lifecycle Gateway)
    // 1.00 -> z = -126 (Sector 07: World Transition Arena & Contact)
    const targetZ = 7 - (scrollProgress * 133);

    // Subtle cinematic lateral sway along the trajectory
    const targetX = Math.sin(scrollProgress * Math.PI * 3) * (isMobile ? 0.25 : 0.65);
    const targetY = Math.cos(scrollProgress * Math.PI * 2.2) * 0.22;

    // Smooth lerping with delta time
    currentPos.current.x = THREE.MathUtils.lerp(currentPos.current.x, targetX, 0.08);
    currentPos.current.y = THREE.MathUtils.lerp(currentPos.current.y, targetY, 0.08);
    currentPos.current.z = THREE.MathUtils.lerp(currentPos.current.z, targetZ, 0.09);

    if (cameraRef.current) {
      cameraRef.current.position.copy(currentPos.current);

      // Target lookAt point positioned ahead of the camera
      const lookZ = currentPos.current.z - 8;
      currentLookAt.current.x = THREE.MathUtils.lerp(currentLookAt.current.x, targetX * 0.4, 0.08);
      currentLookAt.current.y = THREE.MathUtils.lerp(currentLookAt.current.y, targetY * 0.4, 0.08);
      currentLookAt.current.z = THREE.MathUtils.lerp(currentLookAt.current.z, lookZ, 0.08);

      cameraRef.current.lookAt(currentLookAt.current);
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={isMobile ? 65 : 52}
      near={0.1}
      far={320}
      position={[0, 0, 7]}
    />
  );
}

export default function UniverseCanvas({ scrollProgress = 0 }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setHasWebGL(supported);
    } catch (e) {
      setHasWebGL(false);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 bg-[#08090B] pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#287BFF]/10 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        gl={{
          antialias: !isMobile,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: true
        }}
        dpr={isMobile ? [1, 1.2] : [1, 1.5]}
      >
        <Suspense fallback={null}>
          <CameraFlightController scrollProgress={scrollProgress} isMobile={isMobile} />

          {/* Cinematic Lighting System */}
          <ambientLight intensity={0.45} color="#F5F6F8" />
          <directionalLight position={[4, 8, 5]} intensity={1.2} color="#FFFFFF" />

          {/* Sector 1: Electric Blue Key Rim Light */}
          <pointLight
            position={[-3, 2, -15]}
            intensity={3.0}
            distance={40}
            color="#287BFF"
          />

          {/* Sector 2: React Light */}
          <pointLight
            position={[-2, 1, -35]}
            intensity={2.5}
            distance={35}
            color="#61DAFB"
          />

          {/* Sector 3: Node.js Light */}
          <pointLight
            position={[2, -1, -56]}
            intensity={2.8}
            distance={40}
            color="#38BDF8"
          />

          {/* Sector 4: MongoDB Light */}
          <pointLight
            position={[-2, 1, -76]}
            intensity={3.2}
            distance={45}
            color="#10B981"
          />

          {/* Sector 5: Git & Deploy Light */}
          <pointLight
            position={[2, 0, -94]}
            intensity={3.0}
            distance={40}
            color="#63A0FF"
          />

          {/* Sector 6: Lifecycle Gateway Light */}
          <pointLight
            position={[0, 2, -110]}
            intensity={3.5}
            distance={40}
            color="#287BFF"
          />

          {/* Sector 7: Arena Ambient Lighting */}
          <pointLight
            position={[0, 3, -126]}
            intensity={4.5}
            distance={40}
            color="#63A0FF"
          />

          {/* 3D SCENE OBJECTS */}
          {/* ACT 1: Extended Cinematic 3D Digital Tunnel with floating code & tech symbols */}
          <CodingTunnel isMobile={isMobile} />

          {/* ACT 2: Grand Arena ("ENTERING THE WORLD OF MADHESHWARAN") at Z = -126 */}
          <WorldTransitionArena position={[0, 0, -126]} isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
