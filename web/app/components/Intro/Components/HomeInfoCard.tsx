import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TbHandClick } from "react-icons/tb";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { IconType } from "react-icons";

gsap.registerPlugin(TextPlugin);

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  icon: IconType;
}

const HomeInfoCard: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  buttonAction,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  // const titleRef = useRef<HTMLParagraphElement | null>(null);
  // const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    //   // if (titleRef.current) {
    //   //   gsap.fromTo(
    //   //     titleRef.current,
    //   //     { text: "" },
    //   //     { text: title, duration: 1, delay: 0.5, ease: "power2.out" }
    //   //   );
    //   // }

    //   if (descriptionRef.current) {
    //     gsap.fromTo(
    //       descriptionRef.current,
    //       { text: "" },
    //       { text: description, duration: 1, delay: 1, ease: "power2.out" }
    //     );
    //   }
  }, [title]);

  const handleClick = () => {
    if (cardRef.current) {
      // GSAP動畫：向左移動並縮放
      gsap.to(cardRef.current, {
        scale: 1.1,
        x: -100, // 向左移動100像素
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(cardRef.current, {
            scale: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.in",
          });
        },
      });
    }
    buttonAction();
  };
  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-4 shadow-lg text-white overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-500"
      onClick={handleClick}
    >
      <motion.div
        className="absolute top-5 right-5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rotate-45">
          <TbHandClick size={30} />
        </div>
      </motion.div>
      <p className="font-medium sm:text-xl text-center mb-4">
        {Icon && (
          <div className="icon absolute top-5 left-7">
            <Icon size={20} />
          </div>
        )}
        <div className="text-white underline hover:text-gray-200">{title}</div>
      </p>
      <p className="font-medium sm:text-xl text-center">{description}</p>
    </div>
  );
};

export default HomeInfoCard;
