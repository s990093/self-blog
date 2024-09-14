"use client";
import { Tilt } from "react-tilt";

interface TiltWrapperProps {
  id: string; // Renamed from key to id
  children: React.ReactNode;
}

const TiltWrapper: React.FC<TiltWrapperProps> = ({ children }) => {
  return (
    <Tilt
      options={{
        max: 20, // Maximum tilt angle
        scale: 1.05, // Element scaling on hover
        speed: 400, // Speed of the enter/exit transition
      }}
    >
      {children}
    </Tilt>
  );
};

export default TiltWrapper;
