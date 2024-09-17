"use client";
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";
import { useFrame } from "@react-three/fiber";

const VinyRecord = () => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene, animations } = useGLTF(
    getStaticUrl("3d/music/vinyl_single.glb")
  );

  const { actions } = useAnimations(animations, tableRef);

  useEffect(() => {
    const action = actions["Play"];
    if (action) {
      action.play();
      action.timeScale = 0.5;
    }
  }, []);
  return (
    <mesh
      ref={tableRef}
      position={[4, 1, -1]}
      scale={[0.5, 0.5, 0.5]}
      rotation={[Math.PI / 2.5, 0, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default VinyRecord;
