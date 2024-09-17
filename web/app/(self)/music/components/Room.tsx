"use client";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";

const Room = () => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene } = useGLTF(getStaticUrl("3d/music/isometric_room_studio.glb"));

  // const { actions } = useAnimations(animations, tableRef);

  // useEffect(() => {
  //   const action = actions["Play"];
  //   if (action) {
  //     action.play();
  //     action.timeScale = 0.5;
  //   }
  // }, []);
  return (
    <mesh
      ref={tableRef}
      position={[0.5, 0, -0.5]}
      scale={[0.5, 0.5, 0.5]}
      rotation={[0, 0.8, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Room;
