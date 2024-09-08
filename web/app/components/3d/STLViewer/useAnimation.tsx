"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { AnimationConfig } from "./helper";

// Animation config type to handle different animations
export const useAnimation = (
  modelRef: React.RefObject<THREE.Group>, // Updated to use THREE.Group
  config: AnimationConfig
) => {
  console.log(modelRef);
  const clockRef = useRef(new THREE.Clock());
  const rotationCount = useRef(0);

  useEffect(() => {
    if (!modelRef.current) return; // Make sure the group is available
    const {
      type,
      axis = "y",
      speed = 0.01,
      delayMs = 0,
      repeatTimes = 1,
      scaleFactor = 1.05,
    } = config;

    const animate = () => {
      const deltaTime = clockRef.current.getDelta();
      const group = modelRef.current!; // Access the group object

      switch (type) {
        case "rotation":
          if (axis === "x") group.rotation.x += speed * deltaTime;
          else if (axis === "y") group.rotation.y += speed * deltaTime;
          else if (axis === "z") group.rotation.z += speed * deltaTime;

          // Reset after a full rotation
          if (group.rotation[axis] >= Math.PI * 2) {
            group.rotation[axis] = 0;
            rotationCount.current += 1;

            if (rotationCount.current >= repeatTimes) return; // Stop after repeats
          }
          break;

        case "scaling":
          group.scale.set(
            group.scale.x * scaleFactor,
            group.scale.y * scaleFactor,
            group.scale.z * scaleFactor
          );
          break;

        // Add more animations here if needed
      }

      requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
      animate();
    }, delayMs);

    return () => {
      clearTimeout(timeout); // Clean up the timeout
    };
  }, [modelRef, config]);
};
