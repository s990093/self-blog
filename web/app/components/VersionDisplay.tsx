import React from "react";

const VersionDisplay: React.FC = () => {
  const version = process.env.REACT_APP_VERSION || "1.0.0"; // Fallback for testing

  return (
    <div className="absolute top-4 right-4 p-2 border border-navyBlue rounded-lg shadow-lg ">
      <p className="text-blueGrotto text-sm">{version}</p>
    </div>
  );
};

export default VersionDisplay;
