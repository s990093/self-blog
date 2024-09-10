"use client";
import React, { useState, useEffect, ReactNode } from "react";

interface ResourceLoaderProps {
  resourceUrls: string[]; // 传递一个资源 URL 数组
  children: ReactNode;
}

const cachedResources: { [key: string]: any } = {};

const ResourceLoader: React.FC<ResourceLoaderProps> = ({
  resourceUrls,
  children,
}) => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        const loadPromises = resourceUrls.map(async (url) => {
          if (!cachedResources[url]) {
            const response = await fetch(url);
            cachedResources[url] = await response.blob();
          }
        });

        // 等待所有资源加载完成
        await Promise.all(loadPromises);

        // 如果所有资源都加载成功
        setResourcesLoaded(true);
      } catch (error) {
        console.error("Error loading resources", error);
      }
    };

    loadResources();
  }, [resourceUrls]);

  return (
    <div>
      {resourcesLoaded ? <>{children}</> : <div>Loading resources...</div>}
    </div>
  );
};

export default ResourceLoader;
