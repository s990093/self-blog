"use client";
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";

const PlayingGuitar = () => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene, animations } = useGLTF(
    getStaticUrl("3d/music/animated_musical_trem_playing_guitar_loop.glb")
  );

  const { actions } = useAnimations(animations, tableRef);

  useEffect(() => {
    const action = actions["Animation"];
    if (action) {
      action.play();
      action.timeScale = 0.8;
    }
  }, []);

  return (
    <mesh ref={tableRef} position={[-1, -2, -6]} scale={[1.5, 1.5, 1.5]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default PlayingGuitar;
