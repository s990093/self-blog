"use client";

import React from "react";
import { PersonalLink } from "../interface/base";
import { iconMapping } from "../lib/utils/iconMapping";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { TagName } from "./common";
import Link from "next/link";
import { getStaticUrl } from "../cfg/constants";

interface PersonalLinkProps {
  link: PersonalLink;
  position: { top: string; right: string };
}
interface PersonalLinkCardsProps {
  links: PersonalLink[];
  name: string;
}
const PersonalLinkCard: React.FC<PersonalLinkProps> = ({ link, position }) => {
  const IconComponent = iconMapping[link.icon]; // Get the icon component
  return (
    <motion.div
      className="absolute flex items-center p-2 rounded-full shadow-sm transition-colors hover:scale-110  hover:animate-shake "
      initial={{ opacity: 0, top: "0%", right: "0%" }}
      animate={{ opacity: 1, top: position.top, right: position.right }}
      transition={{ duration: 1 }} // Adjust the duration as needed
    >
      <Link href={link.url} target="_blank" rel="noopener noreferrer">
        {IconComponent ? (
          <IconComponent className="w-10 h-10 mr-2" /> // Render the React Icon component
        ) : (
          <span className="text-lg font-medium">{link.platform}</span>
        )}
      </Link>
    </motion.div>
  );
};

const PersonalLinkList: React.FC<PersonalLinkCardsProps> = ({
  links,
  name,
}) => {
  const linkPositions = [
    { top: "2%", right: "25%" },
    { top: "30%", right: "55%" },
    { top: "50%", right: "75%" },
  ];

  return (
    <div className="relative w-full max-w-full max-h-full">
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, x: "-100%", y: "-100%" }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }} // Adjust the duration as needed
      >
        <LazyLoadImage
          src={getStaticUrl("test/self/person-link.png")}
          alt="Personal Links Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <TagName name={name} right="60%" top="20%" angle={-20} />

      {links.map((link, index) => (
        <PersonalLinkCard
          key={index}
          link={link}
          position={linkPositions[index]}
        />
      ))}
    </div>
  );
};

PersonalLinkCard.displayName = "PersonalLinkCard";

export default PersonalLinkList;
