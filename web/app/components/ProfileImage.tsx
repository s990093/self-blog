import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProfileImageProps {
  imageUrl: string;
}

const ProfileImage: React.FC<ProfileImageProps> = React.memo(({ imageUrl }) => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }} // Initial opacity
        animate={{ opacity: 1 }} // Final opacity
        transition={{ duration: 1, ease: "easeInOut" }} // Duration and easing for fade-in
      >
        <LazyLoadImage
          src={imageUrl}
          alt="Profile Image"
          className="h-[210px] rounded-lg mb-4"
        />
      </motion.div>
    </div>
  );
});

ProfileImage.displayName = "Profile Image";

export default ProfileImage;
