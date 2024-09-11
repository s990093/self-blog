"use client";
import React from "react";
import { videos } from "./videos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getStaticUrl } from "../cfg/constants";

const VideosPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Favorite Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className=" shadow-md rounded-lg overflow-hidden">
            {video.image && (
              <LazyLoadImage
                src={getStaticUrl(`/test/self/movie/${video.image}`)}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{video.title}</h2>
              <p className="mb-4">
                <strong>Director:</strong> {video.director}
              </p>
              <p className="mb-4">
                <strong>Genre:</strong> {video.genre}
              </p>
              <p>
                This is a great movie about...
                {/* Replace with detailed description */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
