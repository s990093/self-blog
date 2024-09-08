"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  checkAndTruncateText,
  getMedalColor,
  UseSTLModelProps,
} from "./helper";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

export const useSTLModel = ({
  mountRef,
  enableBackground = false,
  stlPath,
  medalType,
  scale,
  xOffset = 0,
  yOffset = 0,
  texturePath,
  textArray = [],
  fontPath,
}: UseSTLModelProps) => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null); // Group ref to hold both model and text

  useEffect(() => {
    if (mountRef.current) {
      const scene = new THREE.Scene();
      const modelGroup = new THREE.Group(); // Create a group

      modelRef.current = modelGroup; // Assign group to the ref

      const containerWidth = mountRef.current.clientWidth;
      const containerHeight = mountRef.current.clientHeight;
      sceneRef.current = scene;
      scene.add(modelGroup); // Add group to scene

      const camera = new THREE.PerspectiveCamera(
        75,
        containerWidth / containerHeight,
        0.1,
        10000
      );
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(containerWidth, containerHeight);

      if (enableBackground) {
        renderer.setClearColor(0xff0000, 1);
      } else {
        renderer.setClearColor(0x000000, 0);
      }
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 1, 1).normalize();
      scene.add(light);

      const loader = new STLLoader();
      loader.load(stlPath, (geometry) => {
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color(getMedalColor(medalType)),
        });

        const model = new THREE.Mesh(geometry, material);
        geometry.computeBoundingBox();

        const boundingBox = geometry.boundingBox!;
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        model.position.sub(center);

        const maxDim = Math.max(
          boundingBox.max.x - boundingBox.min.x,
          boundingBox.max.y - boundingBox.min.y,
          boundingBox.max.z - boundingBox.min.z
        );
        const adjustedScale =
          Math.min(containerWidth, containerHeight) / (maxDim * scale);
        model.scale.set(adjustedScale, adjustedScale, adjustedScale);

        model.position.set(xOffset, yOffset, 0);
        scene.add(model);
        modelGroup.add(model); // Add model to the group

        const cameraDistance = maxDim * 2;
        camera.position.set(0, 0, cameraDistance);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        camera.near = 0.1;
        camera.far = 10000;
        camera.updateProjectionMatrix();
      });

      if (fontPath) {
        const fontLoader = new FontLoader();
        fontLoader.load(fontPath, (font) => {
          textArray.forEach(
            ({
              name,
              x,
              y,
              z = 10,
              size = 5,
              height = 0.15,
              color = "#ffffff",
            }) => {
              const textGeometry = new TextGeometry(
                checkAndTruncateText(name),
                {
                  font: font,
                  size: size,
                  height: height,
                }
              );
              const textMaterial = new THREE.MeshBasicMaterial({
                color: color,
              });
              const textMesh = new THREE.Mesh(textGeometry, textMaterial);
              textMesh.position.set(x, y, z); // Set position of text
              scene.add(textMesh);
              modelGroup.add(textMesh); // Add text to the group
            }
          );
        });
      }
    }
  }, [mountRef, stlPath, medalType, scale, xOffset, yOffset, texturePath]);

  return { sceneRef, cameraRef, rendererRef, modelRef };
};
