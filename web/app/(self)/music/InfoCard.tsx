"use client";
// InfoCard.tsx
import React, { useEffect } from "react";
import { Html } from "@react-three/drei";
import { Music, MusicType } from "@/app/interface/music";
import { getStaticUrl } from "@/app/cfg/constants";
import { useSpring, animated } from "@react-spring/web";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useDeviceType from "@/app/Context/UseDeviceType";

interface InfoCardProps {
  music: Music;
  musicType: MusicType;
}

const InfoCard: React.FC<InfoCardProps> = ({ music, musicType }) => {
  const device = useDeviceType();
  let position: [number, number, number] = [2.5, -3, 0];
  switch (device) {
    case 1:
      position = [1, -3, 0];
      break;
  }

  const url = getStaticUrl(
    `cover/artist/${music.artist.toLowerCase().replace(/ /g, "-")}.jpg`
  );
  // 使用 useSpring 来设置冲击动画效果
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.9)",
    config: { tension: 500, friction: 10 }, // 强烈的张力和低摩擦力，冲击效果
  }));

  useEffect(() => {
    api.start({
      opacity: 1,
      transform: "scale(1.1)", // 先稍微放大一点
      config: { tension: 500, friction: 12 }, // 快速的反应
      onRest: () => {
        api.start({
          transform: "scale(1)",
          config: { tension: 300, friction: 20 },
        });
      },
    });
  }, [music.id, api]);

  return (
    <>
      {musicType !== MusicType.EmptyList && (
        <Html position={position}>
          <animated.div
            style={styles}
            className="bg-gradient-to-r from-yellow-100 via-white to-yellow-100 bg-opacity-95 rounded-lg shadow-xl max-w-xs flex flex-col items-center "
          >
            {/* Artist Image */}
            <div className="relative flex items-center justify-center bg-black rounded-t-lg overflow-hidden">
              <LazyLoadImage
                src={url}
                alt={`${music.song} cover`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Artist Info */}
            <div className="text-center p-1">
              <p className="text-gray-500 text-sm italic truncate w-24 mx-auto">
                {music.artist}
              </p>{" "}
            </div>
          </animated.div>
        </Html>
      )}
    </>
  );
};

export default InfoCard;
