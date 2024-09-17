"use client";
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

import { getStaticUrl } from "@/app/cfg/constants";

const RecordPlayer = () => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene, animations } = useGLTF(
    getStaticUrl("3d/music/record_player.glb")
  );

  const { actions } = useAnimations(animations, tableRef);

  useEffect(() => {
    const action = actions["ArmatureRecordPlayer|ClaraVinylPlaying"];
    if (action) {
      action.play();
      action.timeScale = 2;
    }
  }, []);
  return (
    <mesh ref={tableRef} position={[-5.5, 0, 1]} scale={[2, 2, 2]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default RecordPlayer;
