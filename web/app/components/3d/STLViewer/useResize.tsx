"use client";
import { useEffect } from "react";
import * as THREE from "three";

interface UseResizeProps {
  mountRef: React.RefObject<HTMLDivElement>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera>;
  rendererRef: React.RefObject<THREE.WebGLRenderer>;
}

export const useResize = ({
  mountRef,
  cameraRef,
  rendererRef,
}: UseResizeProps) => {
  useEffect(() => {
    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        cameraRef.current.aspect = newWidth / newHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mountRef, cameraRef, rendererRef]);
};
