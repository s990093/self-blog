// src/components/VersionDisplay.tsx
import React from "react";

const VersionDisplay: React.FC = () => {
  const version = process.env.REACT_APP_VERSION || "1.0.0"; // Fallback for testing

  return (
    <div className="absolute top-4 right-4 p-4 border border-navyBlue rounded-lg shadow-lg bg-babyBlue">
      <p className="text-blueGrotto">{version}</p>
    </div>
  );
};

export default VersionDisplay;