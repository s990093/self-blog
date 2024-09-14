"use clinet ";
import { Environment, Float } from "@react-three/drei";
import { Book } from "./Book";
import useDeviceType from "@/app/context/UseDeviceType";
export const Experience = () => {
  const device = useDeviceType();
  const xScale = device * 0.5;
  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={1}
        rotationIntensity={1}
      >
        <Book xScale={xScale} />
      </Float>
      {/* <OrbitControls /> */}
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
