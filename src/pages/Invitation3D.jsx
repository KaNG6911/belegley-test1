import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import GiftBox from "../three/GiftBox";

export default function Invitation3D() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full z-20 text-center pt-10 px-4">
        <h1 className="text-white text-4xl sm:text-6xl font-black">
          Happy Birthday 🎉
        </h1>

        <p className="text-pink-200 mt-4 text-sm sm:text-lg">
          Click the gift box to open your invitation
        </p>
      </div>

      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight intensity={1.5} />

        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <GiftBox />
        </Float>

        <OrbitControls enableZoom={false} />

      </Canvas>
    </div>
  );
}