
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { Float } from "@react-three/drei";

function Particles({ count = 100 }) {
  const pointsRef = useRef(null);
  const positions = new Float32Array(count * 3);
  
  // Create a more spread out pattern for particles
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      // Slow down rotation for smoother effect
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.04} 
        color="#33c3f0" 
        transparent 
        opacity={0.6} 
        sizeAttenuation
      />
    </points>
  );
}

function FloatingObjects() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh position={[-2, -1, -2]} castShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color="#33c3f0" 
            transparent
            opacity={0.6} 
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <mesh position={[2, 1, -1]} castShadow>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial 
            color="#33c3f0" 
            transparent
            opacity={0.6} 
          />
        </mesh>
      </Float>
    </>
  );
}

const Scene = () => {
  useGSAP(() => {
    gsap.to(".three-canvas", {
      opacity: 0.7,
      duration: 2,
      ease: "power2.inOut",
      delay: 0.5
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      <Particles count={100} />
      <FloatingObjects />
    </>
  );
};

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-0 three-canvas pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
