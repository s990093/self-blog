"use client";
import { Html, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";
import { MusicType } from "@/app/interface/music";

interface CoverProps {
  coverImageUrl: string;
  type: MusicType;
  song: string;
  isExiting?: boolean;
}

const Cover = ({
  coverImageUrl,
  type,
  song,
  isExiting = false,
}: CoverProps) => {
  const texture = useTexture(getStaticUrl(`cover/${coverImageUrl}.jpg`));
  const planeRef = useRef<Mesh | null>(null);

  const width = 1;
  const height = 1;
  const depth = 0.05;
  const [startPosition] = useState([-5, 3, -2.4] as [number, number, number]); // Start off-screen from the left
  const [middlePosition] = useState([0, 3, -2.4] as [number, number, number]);

  const [exitPosition] = useState([12, 3, -2.4] as [number, number, number]);

  const { position } = useSpring({
    to: { position: isExiting ? exitPosition : middlePosition },
    from: { position: isExiting ? middlePosition : startPosition }, // Always start from the left
    config: { tension: 170, friction: 50, duration: 500 },
    reset: true,
    key: song,
  });

  return (
    <>
      {type !== MusicType.EmptyList ? (
        <animated.mesh
          ref={planeRef}
          position={position}
          scale={[1.5, 1.5, 1.5]}
          // onPointerDown={handlePointerDown}
          // onPointerMove={handlePointerMove}
          // onPointerUp={handlePointerUp}
        >
          <Html
            position={[-1.4, 0.2, 0]}
            className="fixed w-[100px] h-[50px] transform -translate-y-1/2 p-3 rounded-lg text-white text-sm font-bold text-center min-h-[60px]"
          >
            <div className="text-ellipsis">{song}</div>
          </Html>
          <boxGeometry args={[width, height, depth]} />
          <meshBasicMaterial map={texture} />
        </animated.mesh>
      ) : (
        <mesh></mesh>
      )}
    </>
  );
};

export default Cover;
