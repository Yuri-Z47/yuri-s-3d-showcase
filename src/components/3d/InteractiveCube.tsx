import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

const technologies = [
  { name: "Python", color: "#3776ab" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Node.js", color: "#339933" },
  { name: "SQL", color: "#4479a1" },
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
];

function TechCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const edges = useMemo(() => {
    const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    return new THREE.EdgesGeometry(geometry);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main cube wireframe */}
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.8} />
      </lineSegments>

      {/* Inner glowing cube */}
      <mesh ref={meshRef}>
        <boxGeometry args={[2.4, 2.4, 2.4]} />
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Floating tech spheres around the cube */}
      {technologies.map((tech, i) => {
        const angle = (i / technologies.length) * Math.PI * 2;
        const radius = 2.2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle * 2) * 0.5;

        return (
          <Float key={tech.name} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial
                color={tech.color}
                emissive={tech.color}
                emissiveIntensity={0.5}
              />
            </mesh>
          </Float>
        );
      })}

      {/* Corner particles */}
      {[...Array(8)].map((_, i) => {
        const x = i & 1 ? 1.4 : -1.4;
        const y = i & 2 ? 1.4 : -1.4;
        const z = i & 4 ? 1.4 : -1.4;
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#60a5fa"
              emissiveIntensity={1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
      <TechCube />
    </>
  );
}

export function InteractiveCube() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}