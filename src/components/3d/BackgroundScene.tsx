import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";

export function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <ParticleField count={150} />
      </Canvas>
      <div className="absolute inset-0 grid-background" />
      <div className="absolute inset-0 gradient-radial opacity-50" />
    </div>
  );
}