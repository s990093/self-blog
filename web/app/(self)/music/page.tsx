"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
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
import { Music, MusicAction, MusicType } from "@/app/interface/music";
import StarsCanvas from "@/app/components/Common/BG/Stars";
import { motion } from "framer-motion";

const MyMusicPage = () => {
  let startX: number = 0;
  let clienrX: number = 0;

  const elementRef = useRef<HTMLDivElement | null>(null);

  const BLOCK = 130;

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

  const handleNextSong = (type: MusicType = currentMusic.type) => {
    setCurrentMusic((prevMusic) => {
      setPrevMusic(currentMusic);

      let newId: number;
      let newMusic: Music;

      // 根據傳入的 type 或當前的 currentMusic.type 決定歌曲列表
      if (type === MusicType.BandList) {
        newId = (prevMusic.id % bandList.length) + 1; // 計算新的歌曲 ID
        newMusic = bandList[newId - 1]; // 取得新歌曲
      } else if (type === MusicType.SingleList) {
        newId = (prevMusic.id % singleList.length) + 1; // 計算新的歌曲 ID
        newMusic = singleList[newId - 1]; // 取得新歌曲
      } else {
        // 如果不是這兩種列表，保持原狀
        return prevMusic;
      }

      return {
        id: newId,
        music: newMusic,
        type: type,
      };
    });
  };

  const handlePrevSong = (type: MusicType = currentMusic.type) => {
    setCurrentMusic((prevMusic) => {
      setPrevMusic(currentMusic);

      let newId: number;
      let newMusic: Music;

      // 根據傳入的 type 或當前的 currentMusic.type 決定歌曲列表
      if (type === MusicType.BandList) {
        newId =
          (prevMusic.id - 1 + bandList.length) % bandList.length ||
          bandList.length; // 計算上一首的 ID
        newMusic = bandList[newId - 1]; // 取得上一首歌曲
      } else if (type === MusicType.SingleList) {
        newId =
          (prevMusic.id - 1 + singleList.length) % singleList.length ||
          singleList.length; // 計算上一首的 ID
        newMusic = singleList[newId - 1]; // 取得上一首歌曲
      } else {
        return prevMusic;
      }

      return {
        id: newId,
        music: newMusic,
        type: type,
      };
    });
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

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    startX = "touches" in event ? event.touches[0].clientX : event.clientX;
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    clienrX = "touches" in event ? event.touches[0].clientX : event.clientX;
  };

  const handlePointerUp = () => {
    const deltaX = startX - clienrX;

    if (Math.abs(startX - clienrX) > BLOCK) {
      if (deltaX > 0) {
        handleNextSong(); // 播放下一首歌曲
      } else {
        handlePrevSong(); // 播放上一首歌曲
      }
    }
  };

  return (
    <div
      ref={elementRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      className="fixed top-0 left-0 w-full h-screen"
    >
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
          {/* <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3.5} // 锁定最小垂直角度
            maxPolarAngle={Math.PI / 2.2} // 锁定最大垂直角度
          /> */}
        </Suspense>
      </Canvas>
      <StarsCanvas />
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
    </div>
  );
};

export default MyMusicPage;
