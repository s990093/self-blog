"use client";
import React, { useEffect, ReactNode } from "react";
import { recordVisit } from "@/app/lib/utils/api";

interface VisitRecordsProps {
  children?: ReactNode;
}

const VisitRecords: React.FC<VisitRecordsProps> = ({ children }) => {
  useEffect(() => {
    // Call the recordVisit function asynchronously
    const handleRecordVisit = async () => {
      try {
        await recordVisit(); // Make sure recordVisit is defined to handle the API call
      } catch (error) {
        console.error("Error recording visit:", error);
      }
    };

    handleRecordVisit();
  }, []);

  return <>{children}</>;
};

export default VisitRecords;
