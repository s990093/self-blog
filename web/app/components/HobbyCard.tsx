import { Hobby } from "../interface/base";
import React from "react";

interface HobbiesProps {
  hobbies: Hobby[];
}

interface HobbyProps {
  hobby: Hobby;
}

const HobbyCard: React.FC<HobbyProps> = ({ hobby }) => {
  return (
    <div className="bg-[#03394a] text-[#cdeef3] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
      <h2 className="text-xl font-bold mb-2 text-[#1ca4c0]">{hobby.name}</h2>
      <p className="text-gray-300 mb-4">{hobby.shortDescription}</p>
      <div>
        <h3 className="text-sm font-semibold text-[#68d2c3]">Related Items:</h3>
        <ul className="list-disc pl-5 text-[#cdeef3]">
          {hobby.relatedItems.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <span className={`icon-${item.icon}`} />{" "}
              {/* Replace with actual icon */}
              <span>{item.name}</span>
              <span className="text-gray-400"> - {item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HobbyList: React.FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hobbies.map((hobby, idx) => (
        <HobbyCard key={idx} hobby={hobby} />
      ))}
    </div>
  );
};

export default HobbyList;
