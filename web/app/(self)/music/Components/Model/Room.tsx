"use client";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";

const Room = () => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene } = useGLTF(getStaticUrl("3d/music/Room.glb"));

  return (
    <mesh
      ref={tableRef}
      position={[0.5, -1, -0.5]}
      scale={[0.65, 0.65, 0.65]}
      rotation={[0, 0.8, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Room;
