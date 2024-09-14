"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const useOpeningAnimation = (modelRef: React.RefObject<THREE.Group>) => {
  const clockRef = useRef(new THREE.Clock());
  const rotationStep = 0.3 * (Math.PI / 180); // Convert 3 degrees to radians
  const interval = 0.05; // Interval in seconds
  const animationDuration = 1; // Duration for each direction in seconds

  useEffect(() => {
    if (!modelRef.current) return;

    const model = modelRef.current!;
    let rotationDirection = 1; // 1 for forward, -1 for reverse
    let lastUpdateTime = clockRef.current.getElapsedTime();
    let animationStartTime = lastUpdateTime;

    const animate = () => {
      const currentTime = clockRef.current.getElapsedTime();
      const elapsedTime = currentTime - animationStartTime;
      const rotationElapsedTime = currentTime - lastUpdateTime;

      // Check if the animation should reverse
      if (elapsedTime >= animationDuration) {
        rotationDirection *= -1; // Reverse the direction
        animationStartTime = currentTime; // Reset start time for next phase
      }

      // Update rotation based on the elapsed time
      if (rotationElapsedTime >= interval) {
        const rotationIncrement = rotationStep * rotationDirection;
        model.rotation.x += rotationIncrement;
        model.rotation.y += rotationIncrement;
        model.rotation.z += rotationIncrement;

        lastUpdateTime = currentTime; // Reset last update time
      }

      requestAnimationFrame(animate);
    };

    animate(); // Start the animation loop

    return () => {
      // Optionally clean up or stop animation if necessary
    };
  }, [modelRef]);
};
