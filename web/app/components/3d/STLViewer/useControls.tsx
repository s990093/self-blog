"use client";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

interface UseControlsProps {
  cameraRef: React.RefObject<THREE.PerspectiveCamera>;
  rendererRef: React.RefObject<THREE.WebGLRenderer>;
  mountRef: React.RefObject<HTMLDivElement>;
}
export const useControls = ({ cameraRef, rendererRef }: UseControlsProps) => {
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (cameraRef.current && rendererRef.current) {
      const controls = new OrbitControls(
        cameraRef.current,
        rendererRef.current.domElement
      );
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controlsRef.current = controls;
    }

    return () => {
      controlsRef.current?.dispose();
    };
  }, [cameraRef, rendererRef]);

  return { controlsRef };
};
