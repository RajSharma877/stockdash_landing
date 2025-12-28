import { useRef, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import stockdashScreenshot from '../assets/stockdash-screenshot.png';

function TerminalScreen() {
  // Removed meshRef and useFrame rotation that was causing the clipping
  const texture = useLoader(THREE.TextureLoader, stockdashScreenshot);

  return (
    <group>
      {/* Monitor Frame */}
      <mesh position={[0, 0, -0.15]} castShadow receiveShadow>
        <boxGeometry args={[5.4, 3.2, 0.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Screen Bezel */}
      <mesh position={[0, 0, -0.04]} castShadow>
        <boxGeometry args={[5.2, 3, 0.08]} />
        <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Screen with App Screenshot */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[5, 2.8]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Screen Glow Effect */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[5.1, 2.9]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
      </mesh>

      {/* Stand Base */}
      <mesh position={[0, -1.8, -0.3]} castShadow>
        <cylinderGeometry args={[0.8, 1, 0.1, 32]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Stand Neck */}
      <mesh position={[0, -1.2, -0.3]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 16]} />
        <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Decorative LED Strip */}
      <mesh position={[0, -1.5, -0.14]}>
        <boxGeometry args={[0.3, 0.02, 0.02]} />
        <meshBasicMaterial color="#3b82f6" />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#10b981" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <TerminalScreen />
      </Float>

      <Environment preset="city" />
    </>
  );
}

export function Terminal3D() {
  return (
    <div className="w-full h-[350px] sm:h-[500px] lg:h-[700px]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Terminal3D;