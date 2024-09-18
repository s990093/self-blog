"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React from "react";
import { getStaticUrl } from "@/app/cfg/constants";
import { Music } from "@/app/interface/music";

// Load GLTF model
const VinylModel = () => {
  const { scene } = useGLTF(getStaticUrl("3d/glb/12_vinyl_record.glb"));

  // Log the loaded GLTF data for debugging
  // console.log(scene);

  // Check if the scene is loaded
  if (!scene) {
    return <mesh />;
  }
  <mesh>
    <primitive object={scene} scale={1} />
  </mesh>;
  return;
};

interface MusicCardProps {
  music: Music;
}

const MusicCard: React.FC<MusicCardProps> = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Canvas className="w-full h-96" camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <VinylModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default MusicCard;
