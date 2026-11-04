import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

// Real syntax code fragments that float through the 3D universe
const CODE_SNIPPETS = [
  { text: "const developer = new FullStackDeveloper('Madheshwaran T');", color: "#287BFF" },
  { text: "async function buildExperience() { await render3D(); }", color: "#C6CAD0" },
  { text: "const [state, dispatch] = useReducer(workflowReducer);", color: "#63A0FF" },
  { text: "app.use('/api/v1/auth', jwtAuthMiddleware);", color: "#F5F6F8" },
  { text: "await mongoose.connect(process.env.DATABASE_URI);", color: "#287BFF" },
  { text: "const token = jwt.sign({ id, role: 'admin' }, SECRET);", color: "#A5D6FF" },
  { text: "three.WebGLRenderer({ antialias: true, alpha: true });", color: "#C6CAD0" },
  { text: "gsap.to(camera.position, { z: targetZ, scrub: 1 });", color: "#63A0FF" },
  { text: "res.status(200).json({ status: 'success', data });", color: "#F5F6F8" },
  { text: "export default function InnovationHub() { return <Universe />; }", color: "#287BFF" },
  { text: "git commit -m 'feat: full-stack architecture';", color: "#C6CAD0" },
  { text: "router.post('/login', authController.authenticate);", color: "#63A0FF" },
  { text: "const isAuthorized = verifyRole(req.user, 'ADMIN');", color: "#287BFF" },
  { text: "Mongoose.Schema({ client: String, status: 'active' });", color: "#A5D6FF" },
  { text: "npm run build && vite optimize --production", color: "#F5F6F8" },
  { text: "new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);", color: "#C6CAD0" },
  { text: "workflow.execute({ stage: 'DEPLOY', status: 'VERIFIED' });", color: "#287BFF" },
  { text: "const cert = verifyCredential('Tamil Info Technology');", color: "#63A0FF" },
  { text: "docker.compose.up({ services: ['api', 'database', 'web'] });", color: "#F5F6F8" },
  { text: "tailwind.config.js -> colors: { electric: '#287BFF' }", color: "#A5D6FF" }
];

// React-Inspired 3D Symbol: 3 Rotating glowing atomic rings & central nucleus
function ReactSymbol3D({ position = [0, 0, -35], isMobile = false }) {
  const groupRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
    if (ring1.current) ring1.current.rotation.z += delta * 0.8;
    if (ring2.current) ring2.current.rotation.z += delta * 0.6;
    if (ring3.current) ring3.current.rotation.z += delta * 0.7;
  });

  const scale = isMobile ? 0.7 : 1.1;

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        {/* Central Glowing Nucleus */}
        <mesh>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial
            color="#61DAFB"
            emissive="#00B4D8"
            emissiveIntensity={2}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Orbit 1 */}
        <mesh ref={ring1} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.5, 0.04, 16, 64]} />
          <meshStandardMaterial
            color="#61DAFB"
            emissive="#287BFF"
            emissiveIntensity={1.2}
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* Orbit 2 */}
        <mesh ref={ring2} rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
          <torusGeometry args={[1.5, 0.04, 16, 64]} />
          <meshStandardMaterial
            color="#287BFF"
            emissive="#287BFF"
            emissiveIntensity={1.2}
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* Orbit 3 */}
        <mesh ref={ring3} rotation={[Math.PI / 2, -Math.PI / 3, 0]}>
          <torusGeometry args={[1.5, 0.04, 16, 64]} />
          <meshStandardMaterial
            color="#A5D6FF"
            emissive="#61DAFB"
            emissiveIntensity={1.2}
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* 3D Label */}
        <Text
          position={[0, -2.1, 0]}
          fontSize={0.22}
          color="#61DAFB"
          anchorX="center"
          anchorY="middle"
        >
          REACT ARCHITECTURE
        </Text>
      </Float>
    </group>
  );
}

// Node.js-Inspired 3D Symbol: Hexagonal Metallic Cyber Prism with glowing edges
function NodeSymbol3D({ position = [0, 0, -56], isMobile = false }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x += delta * 0.2;
    }
  });

  const scale = isMobile ? 0.75 : 1.15;

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.5}>
        {/* Core Hexagonal Prism */}
        <mesh>
          <cylinderGeometry args={[1.1, 1.1, 0.9, 6]} />
          <meshPhysicalMaterial
            color="#15191F"
            emissive="#22C55E"
            emissiveIntensity={0.3}
            metalness={0.85}
            roughness={0.2}
            clearcoat={0.8}
          />
        </mesh>

        {/* Glowing Wireframe Hexagon Shield */}
        <lineSegments>
          <edgesGeometry args={[new THREE.CylinderGeometry(1.12, 1.12, 0.92, 6)]} />
          <lineBasicMaterial color="#38BDF8" transparent opacity={0.8} />
        </lineSegments>

        {/* Outer Orbiting Energy Ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[1.55, 1.6, 32]} />
          <meshBasicMaterial color="#287BFF" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>

        {/* 3D Label */}
        <Text
          position={[0, -1.9, 0]}
          fontSize={0.22}
          color="#38BDF8"
          anchorX="center"
          anchorY="middle"
        >
          NODE.JS RUNTIME
        </Text>
      </Float>
    </group>
  );
}

// MongoDB-Inspired 3D Symbol: Cybernetic Data Crystal Leaf
function MongoSymbol3D({ position = [0, 0, -76], isMobile = false }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.35;
      groupRef.current.rotation.z += delta * 0.15;
    }
  });

  const scale = isMobile ? 0.75 : 1.1;

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.4}>
        {/* Crystalline Octahedron / Data Leaf */}
        <mesh>
          <octahedronGeometry args={[1.2, 0]} />
          <meshPhysicalMaterial
            color="#08090B"
            emissive="#10B981"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.15}
            transmission={0.4}
            thickness={0.8}
            clearcoat={0.9}
          />
        </mesh>

        {/* Electric Blue Wire Edge Accent */}
        <lineSegments>
          <edgesGeometry args={[new THREE.OctahedronGeometry(1.22, 0)]} />
          <lineBasicMaterial color="#287BFF" transparent opacity={0.85} />
        </lineSegments>

        {/* 3D Label */}
        <Text
          position={[0, -2.0, 0]}
          fontSize={0.22}
          color="#10B981"
          anchorX="center"
          anchorY="middle"
        >
          MONGODB DATABASE
        </Text>
      </Float>
    </group>
  );
}

// Git & Deploy 3D Symbol: Version Control Node Matrix at Z = -94
function GitDeploySymbol3D({ position = [0, 0, -94], isMobile = false }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x += delta * 0.15;
    }
  });

  const scale = isMobile ? 0.75 : 1.1;

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        {/* Central Git Mainline Sphere */}
        <mesh>
          <sphereGeometry args={[0.7, 24, 24]} />
          <meshPhysicalMaterial
            color="#15191F"
            emissive="#287BFF"
            emissiveIntensity={0.7}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Commit Branch 1 */}
        <mesh position={[1.4, 0.6, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#63A0FF" emissive="#287BFF" emissiveIntensity={1.5} />
        </mesh>

        {/* Commit Branch 2 */}
        <mesh position={[-1.3, -0.6, 0.4]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#C6CAD0" emissive="#63A0FF" emissiveIntensity={1} />
        </mesh>

        {/* Orbit Ring */}
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[1.8, 0.03, 16, 48]} />
          <meshBasicMaterial color="#63A0FF" transparent opacity={0.7} />
        </mesh>

        {/* 3D Label */}
        <Text
          position={[0, -2.0, 0]}
          fontSize={0.22}
          color="#63A0FF"
          anchorX="center"
          anchorY="middle"
        >
          PRODUCTION PIPELINE
        </Text>
      </Float>
    </group>
  );
}

// System Lifecycle Gateway at Z = -110
function LifecycleGateway3D({ position = [0, 0, -110], isMobile = false }) {
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state, delta) => {
    if (ring1.current) ring1.current.rotation.z += delta * 0.25;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.35;
  });

  const scale = isMobile ? 0.8 : 1.15;

  return (
    <group position={position} scale={scale}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Outer Ring */}
        <mesh ref={ring1}>
          <ringGeometry args={[2.5, 2.58, 8]} />
          <meshBasicMaterial color="#287BFF" transparent opacity={0.75} side={THREE.DoubleSide} />
        </mesh>

        {/* Inner Ring */}
        <mesh ref={ring2} rotation={[0, 0, Math.PI / 8]}>
          <ringGeometry args={[2.0, 2.06, 8]} />
          <meshBasicMaterial color="#C6CAD0" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>

        {/* 3D Label */}
        <Text
          position={[0, -2.4, 0]}
          fontSize={0.22}
          color="#287BFF"
          anchorX="center"
          anchorY="middle"
        >
          ENGINEERING LIFECYCLE
        </Text>
      </Float>
    </group>
  );
}

export default function CodingTunnel({ isMobile = false }) {
  const tunnelRef = useRef();
  const particlesRef = useRef();
  const ringsRef = useRef();

  // Floating Code Tokens along the extended tunnel path (-10 to -122)
  const codeItems = useMemo(() => {
    const items = [];
    const count = isMobile ? 22 : 44;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.sin(i) * 0.4);
      const radius = 2.6 + (Math.sin(i * 1.5) + 1) * 0.9;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.75;
      const z = -10 - i * 2.55 - (i % 3) * 0.9;
      const snippet = CODE_SNIPPETS[i % CODE_SNIPPETS.length];
      items.push({
        id: i,
        pos: [x, y, z],
        rot: [0, 0, (i % 2 === 0 ? 0.08 : -0.08)],
        text: snippet.text,
        color: snippet.color,
        scale: isMobile ? 0.22 : 0.28,
      });
    }
    return items;
  }, [isMobile]);

  // Extended Tunnel structural rings down to Z = -124
  const ringCount = isMobile ? 24 : 44;
  const rings = useMemo(() => {
    const r = [];
    for (let i = 0; i < ringCount; i++) {
      r.push({
        id: i,
        z: -6 - i * 2.7,
        scale: 3.5 + Math.sin(i * 0.35) * 0.35,
      });
    }
    return r;
  }, [ringCount]);

  // Dual-color particle field spanning full flight path (-135m)
  const particleCount = isMobile ? 650 : 1350;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const blue = new THREE.Color("#287BFF");
    const silver = new THREE.Color("#C6CAD0");

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.8 + Math.random() * 4.6;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius * 0.8;
      pos[i * 3 + 2] = -(Math.random() * 135);

      const isBlue = Math.random() > 0.42;
      const c = isBlue ? blue : silver;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [particleCount]);

  useFrame((state, delta) => {
    if (tunnelRef.current) {
      tunnelRef.current.rotation.z += delta * 0.025;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z += delta * 0.015;
    }
    if (ringsRef.current) {
      const t = state.clock.getElapsedTime();
      ringsRef.current.children.forEach((child, i) => {
        child.rotation.z = Math.sin(t * 0.4 + i * 0.2) * 0.1;
      });
    }
  });

  return (
    <group ref={tunnelRef}>
      {/* 1. TUNNEL STRUCTURAL WIREFRAME RINGS & LIGHT STRIPS */}
      <group ref={ringsRef}>
        {rings.map((ring) => (
          <group key={ring.id} position={[0, 0, ring.z]}>
            {/* Hexagonal Tunnel Rib */}
            <mesh>
              <ringGeometry args={[ring.scale, ring.scale + 0.04, 6]} />
              <meshBasicMaterial
                color="#287BFF"
                transparent
                opacity={0.35}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Metallic Outer Rim */}
            <mesh scale={1.03}>
              <ringGeometry args={[ring.scale, ring.scale + 0.02, 6]} />
              <meshBasicMaterial
                color="#C6CAD0"
                transparent
                opacity={0.18}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* 2. RECTANGULAR ELECTRIC BLUE LIGHT STRIPS EXTENDED DOWN TUNNEL */}
      {[-2.8, 2.8].map((x, idx) => (
        <group key={idx} position={[x, 0, -65]}>
          <mesh>
            <boxGeometry args={[0.04, 0.04, 130]} />
            <meshBasicMaterial color="#287BFF" transparent opacity={0.65} />
          </mesh>
        </group>
      ))}

      {/* 3. EXTENDED CYBER FLOOR GRID */}
      <group position={[0, -2.6, -65]}>
        <gridHelper args={[130, 52, '#287BFF', '#15191F']} rotation={[0, 0, 0]} />
      </group>

      {/* 4. TECH-INSPIRED 3D SYMBOLS AT TRANSITION MILESTONES */}
      {/* Sector 02: React Symbol at Z = -35 */}
      <ReactSymbol3D position={[-2.2, 0.4, -35]} isMobile={isMobile} />

      {/* Sector 03: Node.js Symbol at Z = -56 */}
      <NodeSymbol3D position={[2.2, -0.3, -56]} isMobile={isMobile} />

      {/* Sector 04: MongoDB Symbol at Z = -76 */}
      <MongoSymbol3D position={[-2.0, 0.3, -76]} isMobile={isMobile} />

      {/* Sector 05: Git & Deploy Symbol at Z = -94 */}
      <GitDeploySymbol3D position={[2.1, 0.4, -94]} isMobile={isMobile} />

      {/* Sector 06: Lifecycle Gateway at Z = -110 */}
      <LifecycleGateway3D position={[0, 0.2, -110]} isMobile={isMobile} />

      {/* 5. FLOATING SYNTAX-HIGHLIGHTED CODE FRAGMENTS */}
      {codeItems.map((item) => (
        <group key={item.id} position={item.pos} rotation={item.rot}>
          <Text
            fontSize={item.scale}
            color={item.color}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.03}
          >
            {item.text}
          </Text>
        </group>
      ))}

      {/* 6. CINEMATIC DEPTH PARTICLES */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.05 : 0.075}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
