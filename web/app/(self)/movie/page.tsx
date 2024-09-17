"use client";
import React, { useState } from "react";
import { videos } from "./videos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";

import { getStaticUrl } from "../../cfg/constants";
import { Video } from "../../interface/movie";
import ClickableIcon from "../../components/Common/ClickableIcon";
import { SlideEffect, TiltWrapper } from "../../components/Animation";
import Netflix from "../../components/Common/BG/Netflix";
import StarsCanvas from "../../components/Common/BG/Stars";

interface FilmCardProps {
  video: Video;
  index: number; // 添加 index 作為 props
}

const VideoLayout: React.FC = () => {
  const urls = videos.map((v) => getStaticUrl(`test/self/movie/${v.image}`));

  return (
    <Netflix resourceUrls={urls}>
      <>
        <VideosPage />
        <StarsCanvas />
      </>
    </Netflix>
  );
};
const FilmCard: React.FC<FilmCardProps> = ({ video, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* 正面 */}
      <div
        key="front"
        className="relative pb-[125%] bg-gray-200 cursor-pointer"
        onClick={handleClick}
      >
        {video.image && (
          <LazyLoadImage
            src={getStaticUrl(`/test/self/movie/${video.image}`)}
            alt={video.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-2">
            <SlideEffect
              text={video.title}
              fontSize="text-xl"
              duration={0.5}
              delay={0.1}
            />
          </div>
        </div>
        {index === 0 && (
          <div className="absolute top-[10px] right-[10px]">
            <ClickableIcon />
          </div>
        )}
        {video.favorite && (
          <div className="absolute top-5 left-5 z-10 w-[100px] h-[20px] flex items-center justify-center bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 transform rotate-[-45deg] -translate-x-1/2 -translate-y-1/2">
            <div>
              <span
                className="font-mono"
                style={{ transform: "rotate(45deg)" }}
              >
                Fav
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 背面 */}
      <div
        key="back"
        className="relative w-full h-[317px] md:h-[232px] lg:h-[232px]  s cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-1">{video.title}</h2>
            {video.description && (
              <p className="text-gray-600 text-xs">{video.description}</p>
            )}
            <p className="text-gray-600 text-xs">{video.genre}</p>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

const VideosPage: React.FC = () => {
  // const { addNotification } = useAppContext();
  // const router = useRouter();
  // const handle = () => {
  //   addNotification("Wait a moment ...");
  //   router.push("/");
  // };
  return (
    <>
      <div className="relative mx-auto p-7 min-h-screen">
        {/* <button onClick={handle}>
          <div className="absolute top-5 left-5 z-20 text-xl hover:text-gray-600">
            <AiOutlineArrowLeft className="h-8 w-8" />
          </div>
        </button> */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          My Favorite Movies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <motion.div
                key={index}
                className="overflow-hidden transform transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // 延遲動畫，使卡片有逐一顯示的效果
              >
                <TiltWrapper options={{ max: 45 }}>
                  <FilmCard video={video} index={index} />
                </TiltWrapper>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoLayout;
