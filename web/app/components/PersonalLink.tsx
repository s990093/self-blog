import React from "react";
import { PersonalLink } from "../interface/base";
import { iconMapping } from "../lib/helper/iconMapping";

interface PersonalLinkProps {
  link: PersonalLink;
}
interface PersonalLinkCardsProps {
  links: PersonalLink[];
}
const PersonalLinkCard: React.FC<PersonalLinkProps> = ({ link }) => {
  const IconComponent = iconMapping[link.icon]; // Get the icon component

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
    >
      {IconComponent ? (
        <IconComponent className="w-6 h-6 mr-2" /> // Render the React Icon component
      ) : (
        <span className="text-lg font-medium">{link.platform}</span>
      )}
    </a>
  );
};

const PersonalLinkList: React.FC<PersonalLinkCardsProps> = ({ links }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link, index) => (
        <PersonalLinkCard key={index} link={link} />
      ))}
    </div>
  );
};

export default PersonalLinkList;