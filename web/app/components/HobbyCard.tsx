import { Hobby } from "../interface/base";
import React from "react";
import Image from "next/image";
import { TiltWrapper, TypingEffect } from "./animation";
import { getStaticUrl } from "../cfg/constants";

interface HobbiesProps {
  hobbies: Hobby[];
}

interface HobbyProps {
  hobby: Hobby;
}

const HobbyCard: React.FC<HobbyProps> = ({ hobby }) => {
  // console.log(getStaticUrl(`test/self/hobbies/${hobby.imageUrl}.png`));
  return (
    <div className="bg-[#03394a] text-[#cdeef3] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={getStaticUrl(`test/self/hobbies/${hobby.imageUrl}.png`)}
          alt={hobby.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h2 className="text-xl font-bold mb-2 text-[#1ca4c0]">{hobby.name}</h2>
      <p className="text-gray-300 mb-4">{hobby.shortDescription}</p>
    </div>
  );
};
const HobbyList: React.FC<HobbiesProps> = React.memo(({ hobbies }) => {
  return (
    <>
      <div className="m-4 h-[100px]">
        <TypingEffect
          sequence={["My Hobbies", 2000, "My Interests", 2000]}
          fontSize={50}
        />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, idx) => (
          <TiltWrapper key={idx}>
            <HobbyCard key={idx} hobby={hobby} />
          </TiltWrapper>
        ))}
      </div>
    </>
  );
});

export default HobbyList;
