"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { HomeInfo, Loader } from "./components/Intro/Components";
import { Island, Plane, Sky } from "./components/Intro/Models";
import { motion } from "framer-motion";
import { Bird } from "./components/Intro/Models/Brid/Bird";
import { Seagull } from "./components/Intro/Models/Brid/Seagull";
import { Flamingo } from "./components/Intro/Models/Brid/Flamingo";

const Home = () => {
  // const audioRef = useRef(new Audio(getStaticUrl("audios/sakura.mp3")));

  // audioRef.current.volume = 0.4;
  // audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  // const [isPlayingMusic] = useState(false);
  // const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // useEffect(() => {
  //   if (isPlayingMusic) {
  //     audioRef.current.play();
  //   }
  //   return () => {
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     audioRef.current.pause();
  //   };
  // }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    if (typeof window === "undefined") return [[], []]; // Default or empty values when not in the browser

    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustBiplaneForScreenSize = () => {
    if (typeof window === "undefined") return [[], []]; // Default or empty values when not in the browser

    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="fixed top-0 left-0 w-full h-screen">
      <div className="absolute top-10 left-0 right-0 z-10 flex items-center justify-center bg-opacity-45">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 10000 }}
      >
        <Suspense fallback={<Loader />}>
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

          <Sky isRotating={isRotating} />
          <Bird />
          <Seagull position={[-1, 5, -2]} />
          <Flamingo position={[-3, 1, -3]} />

          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
            currentFocusPoint={undefined}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {/* <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div> */}
      <div className="absolute rotate-90 bottom-3 w-full flex justify-center items-center">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
