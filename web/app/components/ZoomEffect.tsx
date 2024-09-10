import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ZoomEffectProps {
  imageUrl: string;
  onAnimationComplete: () => void;
}

const ZoomEffect: React.FC<ZoomEffectProps> = ({
  imageUrl,
  onAnimationComplete,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <motion.div
        initial={{ scale: 1, rotate: 0, y: 0 }}
        animate={{
          scale: [1, 2.4, 0.1], // Scale down to 0.1
          rotate: [0, 720], // Rotate continuously
        }}
        transition={{
          scale: {
            duration: 3, // Time to scale down
            ease: "easeInOut",
          },
          rotate: {
            duration: 3, // Time for continuous rotation
            ease: "linear", // Continuous rotation
            repeat: 0, // Rotate for the duration only
            repeatType: "loop", // Loop the rotation
          },
        }}
        onAnimationComplete={onAnimationComplete}
        style={{
          transformOrigin: "center center", // Set the rotation center
        }}
        className="flex items-center justify-center"
      >
        <LazyLoadImage
          src={imageUrl}
          alt="Zoom Effect Image"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ZoomEffect;
