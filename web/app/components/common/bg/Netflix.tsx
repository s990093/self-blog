"use client";
import React, { useEffect, useState } from "react";
import "./NetflixIntro.css";

interface ResourceLoaderProps {
  resourceUrls: string[];
  children: React.ReactNode;
}

const Netflix: React.FC<ResourceLoaderProps> = ({ resourceUrls, children }) => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [cachedResources, setCachedResources] = useState<{
    [key: string]: Blob;
  }>({});
  const maxLoadTime = 4400;

  useEffect(() => {
    const loadResources = async () => {
      const startTime = Date.now();

      try {
        // 生成加載資源的 Promise
        const loadPromises = resourceUrls.map(async (url) => {
          if (!cachedResources[url]) {
            const response = await fetch(url);
            if (response.ok) {
              const blob = await response.blob();
              setCachedResources((prev) => ({ ...prev, [url]: blob }));
            } else {
              throw new Error(`Failed to load resource: ${url}`);
            }
          }
        });

        // 等待所有資源加載完成
        await Promise.all(loadPromises);

        // 等待到最大時間
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(maxLoadTime - elapsedTime, 0);

        setTimeout(() => {
          setResourcesLoaded(true);
        }, remainingTime);
      } catch (error) {
        console.error("Error loading resources", error);
        // 無論如何都等待 3.5 秒
        setTimeout(() => {
          setResourcesLoaded(true);
        }, maxLoadTime);
      }
    };

    loadResources();
  }, [resourceUrls, cachedResources]);

  const rawHTML = `
  <div id="container">
      <!-- Edit the letter attr to: N, E, T, F, L, I or X -->
      <netflixintro letter="L">
        <div class="helper-1">
          <div class="effect-brush">
            <span class="fur-31"></span>
            <span class="fur-30"></span>
            <span class="fur-29"></span>
            <span class="fur-28"></span>
            <span class="fur-27"></span>
            <span class="fur-26"></span>
            <span class="fur-25"></span>
            <span class="fur-24"></span>
            <span class="fur-23"></span>
            <span class="fur-22"></span>
            <span class="fur-21"></span>
            <span class="fur-20"></span>
            <span class="fur-19"></span>
            <span class="fur-18"></span>
            <span class="fur-17"></span>
            <span class="fur-16"></span>
            <span class="fur-15"></span>
            <span class="fur-14"></span>
            <span class="fur-13"></span>
            <span class="fur-12"></span>
            <span class="fur-11"></span>
            <span class="fur-10"></span>
            <span class="fur-9"></span>
            <span class="fur-8"></span>
            <span class="fur-7"></span>
            <span class="fur-6"></span>
            <span class="fur-5"></span>
            <span class="fur-4"></span>
            <span class="fur-3"></span>
            <span class="fur-2"></span>
            <span class="fur-1"></span>
          </div>
          <div class="effect-lumieres">
            <span class="lamp-1"></span>
            <span class="lamp-2"></span>
            <span class="lamp-3"></span>
            <span class="lamp-4"></span>
            <span class="lamp-5"></span>
            <span class="lamp-6"></span>
            <span class="lamp-7"></span>
            <span class="lamp-8"></span>
            <span class="lamp-9"></span>
            <span class="lamp-10"></span>
            <span class="lamp-11"></span>
            <span class="lamp-12"></span>
            <span class="lamp-13"></span>
            <span class="lamp-14"></span>
            <span class="lamp-15"></span>
            <span class="lamp-16"></span>
            <span class="lamp-17"></span>
            <span class="lamp-18"></span>
            <span class="lamp-19"></span>
            <span class="lamp-20"></span>
            <span class="lamp-21"></span>
            <span class="lamp-22"></span>
            <span class="lamp-23"></span>
            <span class="lamp-24"></span>
            <span class="lamp-25"></span>
            <span class="lamp-26"></span>
            <span class="lamp-27"></span>
            <span class="lamp-28"></span>
          </div>
        </div>
        <div class="helper-2">
          <div class="effect-brush">
            <span class="fur-31"></span>
            <span class="fur-30"></span>
            <span class="fur-29"></span>
            <span class="fur-28"></span>
            <span class="fur-27"></span>
            <span class="fur-26"></span>
            <span class="fur-25"></span>
            <span class="fur-24"></span>
            <span class="fur-23"></span>
            <span class="fur-22"></span>
            <span class="fur-21"></span>
            <span class="fur-20"></span>
            <span class="fur-19"></span>
            <span class="fur-18"></span>
            <span class="fur-17"></span>
            <span class="fur-16"></span>
            <span class="fur-15"></span>
            <span class="fur-14"></span>
            <span class="fur-13"></span>
            <span class="fur-12"></span>
            <span class="fur-11"></span>
            <span class="fur-10"></span>
            <span class="fur-9"></span>
            <span class="fur-8"></span>
            <span class="fur-7"></span>
            <span class="fur-6"></span>
            <span class="fur-5"></span>
            <span class="fur-4"></span>
            <span class="fur-3"></span>
            <span class="fur-2"></span>
            <span class="fur-1"></span>
          </div>
        </div>
        <div class="helper-3">
          <div class="effect-brush">
            <span class="fur-31"></span>
            <span class="fur-30"></span>
            <span class="fur-29"></span>
            <span class="fur-28"></span>
            <span class="fur-27"></span>
            <span class="fur-26"></span>
            <span class="fur-25"></span>
            <span class="fur-24"></span>
            <span class="fur-23"></span>
            <span class="fur-22"></span>
            <span class="fur-21"></span>
            <span class="fur-20"></span>
            <span class="fur-19"></span>
            <span class="fur-18"></span>
            <span class="fur-17"></span>
            <span class="fur-16"></span>
            <span class="fur-15"></span>
            <span class="fur-14"></span>
            <span class="fur-13"></span>
            <span class="fur-12"></span>
            <span class="fur-11"></span>
            <span class="fur-10"></span>
            <span class="fur-9"></span>
            <span class="fur-8"></span>
            <span class="fur-7"></span>
            <span class="fur-6"></span>
            <span class="fur-5"></span>
            <span class="fur-4"></span>
            <span class="fur-3"></span>
            <span class="fur-2"></span>
            <span class="fur-1"></span>
          </div>
        </div>
        <div class="helper-4">
          <div class="effect-brush">
            <span class="fur-31"></span>
            <span class="fur-30"></span>
            <span class="fur-29"></span>
            <span class="fur-28"></span>
            <span class="fur-27"></span>
            <span class="fur-26"></span>
            <span class="fur-25"></span>
            <span class="fur-24"></span>
            <span class="fur-23"></span>
            <span class="fur-22"></span>
            <span class="fur-21"></span>
            <span class="fur-20"></span>
            <span class="fur-19"></span>
            <span class="fur-18"></span>
            <span class="fur-17"></span>
            <span class="fur-16"></span>
            <span class="fur-15"></span>
            <span class="fur-14"></span>
            <span class="fur-13"></span>
            <span class="fur-12"></span>
            <span class="fur-11"></span>
            <span class="fur-10"></span>
            <span class="fur-9"></span>
            <span class="fur-8"></span>
            <span class="fur-7"></span>
            <span class="fur-6"></span>
            <span class="fur-5"></span>
            <span class="fur-4"></span>
            <span class="fur-3"></span>
            <span class="fur-2"></span>
            <span class="fur-1"></span>
          </div>
        </div>
      </netflixintro>
    </div> 
`;

  return (
    <>
      {resourcesLoaded ? (
        children
      ) : (
        <div className="flex min-h-screen">
          <div
            style={{ width: " 100%" }}
            dangerouslySetInnerHTML={{ __html: rawHTML }}
          />
        </div>
      )}
    </>
  );
};

export default Netflix;
