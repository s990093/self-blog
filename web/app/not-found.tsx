"use client";
import React from "react";
import { useRouter } from "next/navigation";
import VantaBackground from "./components/Common/VantaBackground";

const Custom404: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <VantaBackground>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <button
          onClick={handleClick}
          className="mt-6 text-blue-500 hover:underline cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label="Go back to Home"
        >
          Go back to Home
        </button>
      </div>
    </VantaBackground>
  );
};

export default Custom404;
