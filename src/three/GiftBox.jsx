import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function GiftBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    gsap.to(meshRef.current.rotation, {
      x: Math.PI,
      duration: 1.5,
    });

    gsap.to(meshRef.current.scale, {
      x: 1.2,
      y: 1.2,
      z: 1.2,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <mesh ref={meshRef} onClick={handleClick}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial color="#ff4da6" />
    </mesh>
  );
}