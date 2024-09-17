"use client";
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";

const Recordtable = () => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene, animations } = useGLTF(
    getStaticUrl("3d/music/record_table.glb")
  );

  return (
    <mesh
      ref={tableRef}
      position={[-5, -3, -1.5]}
      scale={[0.8, 0.8, 0.8]}
      rotation={[0, 1, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Recordtable;
