"use client";
import { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import { getStaticUrl } from "@/app/cfg/constants";
import { MusicType } from "@/app/interface/music";

interface VinyRecordProps {
  type: MusicType;
  id: number;
}

const VinyRecord = ({ type, id }: VinyRecordProps) => {
  const tableRef = useRef<Mesh | null>(null);
  const { scene, animations } = useGLTF(
    getStaticUrl("3d/music/vinyl_single.glb")
  );

  const { actions } = useAnimations(animations, tableRef);
  const [showMesh, setShowMesh] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const targetPosition = [0.74, 3, -2.4] as [number, number, number];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (type !== MusicType.EmptyList) {
      setShowMesh(false);
      setTriggerAnimation(false);

      timer = setTimeout(() => {
        setShowMesh(true);
        setTriggerAnimation(true);
      }, 500);
    } else {
      setShowMesh(false);
      setTriggerAnimation(false);
    }

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const action = actions["Play"];

    if (triggerAnimation) {
      if (action) {
        action.paused = false;
        action.play();
        action.timeScale = 0.5;
      }

      const mesh = tableRef.current;
      if (mesh) {
        // Initial setup
        mesh.position.set(0, 3, -2.4);
        mesh.rotation.set(Math.PI / 2, 0, 0);

        // Animation setup
        const start = Date.now();
        const duration = 5000;

        const animate = () => {
          if (tableRef.current) {
            const elapsed = Date.now() - start;

            // Calculate progress as a fraction between 0 and 1
            const progress = Math.min(elapsed / duration, 1);

            // Linearly interpolate position
            tableRef.current.position.lerp(
              new Vector3(...targetPosition),
              progress
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }
        };
        animate();
      }
    } else {
      if (action) {
        action.paused = true;
      }
    }
  }, [triggerAnimation]);

  return (
    <>
      {showMesh ? (
        <mesh
          ref={tableRef}
          position={[0, 3, -2.4]}
          scale={[0.46, 0.46, 0.46]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <primitive object={scene} />
        </mesh>
      ) : (
        <mesh />
      )}
    </>
  );
};

export default VinyRecord;
