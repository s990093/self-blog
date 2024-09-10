"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { useSpring } from "@react-spring/web"; // 导入 react-spring/web
import { TypingEffect } from "../components/Animation";

interface ResourceLoaderProps {
  resourceUrls: string[];
  children: ReactNode;
}

const cachedResources: { [key: string]: any } = {};

const ResourceLoader: React.FC<ResourceLoaderProps> = ({
  resourceUrls,
  children,
}) => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  // 定义 spring 动画
  const fadeInStyle = useSpring({
    opacity: resourcesLoaded ? 1 : 0, // 根据资源加载状态调整透明度
    transform: resourcesLoaded ? "translateY(0)" : "translateY(20px)", // 淡入时的位移效果
    config: { tension: 200, friction: 20 }, // 动画配置，控制弹性和阻力
  });

  useEffect(() => {
    const loadResources = async () => {
      try {
        const loadPromises = resourceUrls.map(async (url) => {
          if (!cachedResources[url]) {
            const response = await fetch(url);
            if (response.ok) {
              cachedResources[url] = await response.blob();
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
        <>{children}</>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
          <TypingEffect
            sequence={["Loading", 1000, "Hello World !", 1000]}
            fontSize={100}
          />
        </div>
      )}
    </>
  );
};

export default ResourceLoader;
