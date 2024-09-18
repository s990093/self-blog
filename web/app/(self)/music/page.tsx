"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";

import {
  Cover,
  RecordPlayer,
  RecordRack,
  RecordTable,
  Room,
  VinyRecord,
} from "./Components/Model/index";
import { Loader, InfoCard } from "./Components/inedx";
import { singleList, bandList } from "./myMusic";
import { MusicAction, MusicType } from "@/app/interface/music";
import StarsCanvas from "@/app/components/Common/BG/Stars";

const MyMusicPage = () => {
  const [currentMusic, setCurrentMusic] = useState<MusicAction>({
    id: 0,
    music: bandList[0],
    type: MusicType.EmptyList,
  });

  const [prevMusic, setPrevMusic] = useState<MusicAction>({
    id: 0,
    music: bandList[0],
    type: MusicType.EmptyList,
  });

  const handleRecordRack = () => {
    setCurrentMusic((prevMusic) => {
      setPrevMusic(currentMusic);
      const newId = (prevMusic.id % bandList.length) + 1;
      return {
        id: newId,
        music: bandList[newId - 1],
        type: MusicType.BandList,
      };
    });
    // playMusic();
  };

  const handleRecordTable = () => {
    setCurrentMusic((prevMusic) => {
      setPrevMusic(currentMusic);
      const newId = (prevMusic.id % singleList.length) + 1;
      return {
        id: newId,
        music: singleList[newId - 1],
        type: MusicType.SingleList,
      };
    });
    // playMusic();
  };

  // const playMusic = () => {
  //   const audio = new Audio(
  //     getStaticUrl(
  //       `cover/audio/${currentMusic.music.song
  //         .toLowerCase()
  //         .replace(/ /g, "-")}.mp3`
  //     )
  //   );
  //   audio.volume = 0.5;
  //   audio.play().catch((error) => {
  //     console.error("Error trying to play audio:", error);
  //   });
  // };

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <h1 className="text-2xl font-bold mb-6 p-4 text-center">
        My Favorite Song
      </h1>
      <Canvas camera={{ position: [0, 4, 5], near: 0.1, far: 10000 }} shadows>
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

          <InfoCard music={currentMusic.music} musicType={currentMusic.type} />
          <RecordTable onClick={handleRecordTable} />
          <RecordRack onClick={handleRecordRack} />
          <RecordPlayer />
          {/* <PlayingGuitar /> */}

          <Cover
            coverImageUrl={prevMusic.music.song
              .toLowerCase()
              .replace(/ /g, "-")}
            type={prevMusic.type}
            isExiting={true}
            song={""}
          />
          <Cover
            coverImageUrl={currentMusic.music.song
              .toLowerCase()
              .replace(/ /g, "-")}
            song={currentMusic.music.song}
            type={currentMusic.type}
          />
          <VinyRecord type={currentMusic.type} id={currentMusic.id} />
          <Room />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3.5} // 锁定最小垂直角度
            maxPolarAngle={Math.PI / 2.2} // 锁定最大垂直角度
          />
        </Suspense>
      </Canvas>

      <StarsCanvas />
    </div>
  );
};

export default MyMusicPage;
