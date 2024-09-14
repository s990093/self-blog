"use client";

import React, { useRef, useEffect } from "react";
import { STLViewerProps } from "./helper";
import { useSTLModel } from "./useSTLModel";
import { useControls } from "./useControls";
import { useResize } from "./useResize";

const STLViewer: React.FC<STLViewerProps> = ({
  height,
  width,
  xOffset = 0,
  yOffset = 0,
  scale = 1,
  enableBackground = false,
  stlPath,
  medalType,
  texturePath,
  textArray = [],
  fontPath,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { sceneRef, cameraRef, rendererRef } = useSTLModel({
    mountRef,
    enableBackground,
    stlPath,
    medalType,
    scale,
    xOffset,
    yOffset,
    texturePath,
    textArray,
    fontPath,
  });

  const { controlsRef } = useControls({
    cameraRef,
    rendererRef,
    mountRef,
  });

  useResize({
    mountRef,
    cameraRef,
    rendererRef,
  });

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      controlsRef.current?.update();
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
    };
    animate();

    return () => {
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ height: `${height}px`, width: `${width}px` }}
    />
  );
};

export default STLViewer;
