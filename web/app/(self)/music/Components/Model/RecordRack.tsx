"use client";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";
import Tooltip from "../Tooltip";

interface RecordRackProps {
  onClick: () => void;
}
const RecordRack = ({ onClick }: RecordRackProps) => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene } = useGLTF(getStaticUrl("3d/music/RecordRack.glb"));

  return (
    <mesh
      ref={tableRef}
      position={[1.1, -1, -0.1]}
      scale={[0.3, 0.3, 0.3]}
      rotation={[0, 0.1, 0]}
    >
      <primitive object={scene} />
      <Tooltip position={[0, 4.3, 0]} onClick={onClick} desc="band" />
    </mesh>
  );
};

export default RecordRack;
