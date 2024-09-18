"use client";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";
import Tooltip from "../Tooltip";
interface RecordtableProps {
  onClick: () => void;
}
const Recordtable = ({ onClick }: RecordtableProps) => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene } = useGLTF(getStaticUrl("3d/music/record_table.glb"));
  return (
    <mesh
      ref={tableRef}
      position={[-1.8, -1, -0.4]}
      scale={[0.65, 0.65, 0.65]}
      rotation={[0, 0.9, 0]}
    >
      <primitive object={scene} />
      <Tooltip position={[0, 2.8, 0]} onClick={onClick} desc="singer" />
    </mesh>
  );
};

export default Recordtable;
