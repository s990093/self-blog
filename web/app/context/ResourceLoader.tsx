"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { TypingEffect } from "../components/Animation";
import { getDeviceType } from "../lib/utils/func";
import ProgressBar from "@ramonak/react-progress-bar";

interface ResourceLoaderProps {
  resourceUrls: string[];
  children: ReactNode;
}

const cachedResources: { [key: string]: Blob } = {};

interface ProgressProps {
  progress: number; // Add the progress prop to the component
}
const Progress: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <div className="w-[200px] max-w-xs mt-6">
      <ProgressBar
        completed={progress}
        maxCompleted={100}
        bgColor="#3b82f6"
        customLabel="@"
      />
    </div>
  );
};

const ResourceLoader: React.FC<ResourceLoaderProps> = ({
  resourceUrls,
  children,
}) => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const deviceWith = getDeviceType();
  let fontSize;

  switch (deviceWith) {
    case 1:
      fontSize = 30;
      break;
    case 3:
      fontSize = 30;
      break;
    case 2:
      fontSize = 60;
      break;
    default:
      fontSize = 16;
      break;
  }

  useEffect(() => {
    const loadResources = async () => {
      try {
        let loadedCount = 0;
        const totalResources = resourceUrls.length;
        const loadPromises = resourceUrls.map(async (url) => {
          if (!cachedResources[url]) {
            const response = await fetch(url);
            if (response.ok) {
              cachedResources[url] = await response.blob();
              loadedCount++;
              setProgress(Math.round((loadedCount / totalResources) * 100)); // Round progress
            } else {
              throw new Error(`Failed to load resource: ${url}`);
            }
          }
        });

        await Promise.all(loadPromises);
        setResourcesLoaded(true);
      } catch (error) {
        console.error("Error loading resources", error);
      }
    };

    loadResources();
  }, [resourceUrls]);

  return (
    <>
      {resourcesLoaded ? (
        children
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 py-6 bg-[length:200%_200%] animate-gradient-move">
          <div className="grid grid-cols-1 gap-4">
            <TypingEffect
              sequence={["Loading", 600, "Hello World !", 1000]}
              fontSize={fontSize}
              singleLine={true}
            />
            <div className="flex items-center justify-center mt-4">
              <div className="border border-gray-300 p-4 rounded-lg shadow-lg mt-[30px]">
                <div className="text-lg font-mono">For NTU GDSC</div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Progress progress={progress} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResourceLoader;
