"use client";
import React from "react";
import { videos } from "./videos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getStaticUrl } from "../cfg/constants";

const VideosPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        My Favorite Movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            {video.image && (
              <div className="relative pb-[125%] bg-gray-200">
                {/* Aspect ratio 4:5 */}
                <LazyLoadImage
                  src={getStaticUrl(`/test/self/movie/${video.image}`)}
                  alt={video.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-2 bg-white">
              <h2 className="text-lg font-semibold mb-1">{video.title}</h2>
              {video.description && (
                <p className="text-gray-600 text-xs">{video.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
