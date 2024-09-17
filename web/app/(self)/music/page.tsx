"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";

import {
  PlayingGuitar,
  RecordPlayer,
  RecordTable,
  Room,
  VinyRecord,
} from "./components/index";

const MyMusicPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <Canvas camera={{ position: [0, 2, 4], near: 0.1, far: 10000 }} shadows>
        <Suspense>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            // skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <RecordTable />
          <RecordPlayer />
          {/* <PlayingGuitar /> */}
          <VinyRecord />
          {/* <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          /> */}
          <Room />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MyMusicPage;
