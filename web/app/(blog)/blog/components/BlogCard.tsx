"use client";
import React from "react";
import { BlogCardProps } from "./Interface";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TiltWrapper } from "@/app/components/Animation";
import { useAppContext } from "@/app/Context/AppContext";
import { useRouter } from "next/navigation";

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl,
  isBig = false,
}) => {
  const { addNotification } = useAppContext();
  const router = useRouter();

  const handleBlogPage = () => {
    addNotification("Navigating to blog ...");
    router.push(`/blog/${id}`);
  };
  return (
    <TiltWrapper>
      <div
        onClick={handleBlogPage}
        className={`relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow ${
          isBig ? "w-full h-auto" : "w-full h-64"
        }`}
      >
        <LazyLoadImage
          src={imageUrl}
          alt={title}
          className={`w-full ${isBig ? "h-full" : "h-64"} object-cover`}
        />

        {/* 在圖片上疊加內容 */}
        <div className="absolute inset-0 bg-black bg-opacity-50 p-6">
          <div className="absolute bottom-10">
            {/* 上方的標題 */}
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {/* 底部的摘要 */}
            <p className="text-gray-300">{excerpt}</p>
          </div>
        </div>
      </div>
    </TiltWrapper>
  );
};

export default BlogCard;
