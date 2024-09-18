"use client";
import { useRef, useState } from "react";
import { Html, useTexture } from "@react-three/drei";
import { Mesh } from "three";
import { getStaticUrl } from "@/app/cfg/constants";
import { animated, useSpring } from "@react-spring/three"; // Import react-spring for animation
import { MusicType } from "@/app/interface/music";

interface CoverProps {
  coverImageUrl: string;
  song: string;
  type: string;
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

  const width = 1; // Width of the box
  const height = 1; // Height of the box
  const depth = 0.05; // Thickness of the box
  const [startPosition] = useState([-5, 3, -2.4] as [number, number, number]); // Start off-screen from the left
  const [middlePosition] = useState([0, 3, -2.4] as [number, number, number]); // Middle position for the box
  const [exitPosition] = useState([10, 3, -2.4] as [number, number, number]); // Exit position to the right

  const { position } = useSpring({
    to: { position: isExiting ? exitPosition : middlePosition }, // Animate to the right if exiting, else stay in the middle
    from: { position: isExiting ? middlePosition : startPosition }, // Always start from the left
    config: { tension: 170, friction: 50, duration: 500, easing: (t) => t }, // Smoothness of the animation
    reset: true, // Reset the animation when triggered
    key: coverImageUrl, // Key animation to coverImageUrl to trigger animation reset
  });

  return (
    <>
      {type !== MusicType.EmptyList ? (
        <animated.mesh
          ref={planeRef}
          position={position}
          scale={[1.5, 1.5, 1.5]}
        >
          <Html
            position={[-1.4, 0.2, 0]}
            className="fixed w-[100px] h-[50px] transform -translate-y-1/2 p-3 rounded-lg text-white text-sm font-bold text-center  min-h-[60px]"
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
