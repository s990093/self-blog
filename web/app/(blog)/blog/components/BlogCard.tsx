"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TiltWrapper } from "@/app/components/Animation";
import { useAppContext } from "@/app/Context/AppContext";
import { useRouter } from "next/navigation";
import { getDjangoStaticUrl } from "@/app/cfg/constants";
import { BlogCardProps } from "@/app/interface/blog";

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  photo,
  isBig = false,
}) => {
  const { addNotification } = useAppContext();
  const router = useRouter();

  const handleBlogPage = () => {
    addNotification("Navigating to blog ...");
    router.push(`/blog/${id}`);
  };
  return (
    <TiltWrapper className="w-full h-full">
      <div
        onClick={handleBlogPage}
        className={`relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow w-full h-full`}
      >
        <LazyLoadImage
          src={getDjangoStaticUrl(photo)}
          alt={title}
          className={`w-full ${isBig ? "h-full" : "h-32"} object-cover`}
        />

        {/* 在圖片上疊加內容 */}
        <div className="absolute inset-0 bg-black bg-opacity-50 p-6">
          <div className="absolute bottom-5">
            {/* 上方的標題 */}
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {/* 底部的摘要 */}
          </div>
        </div>
      </div>
    </TiltWrapper>
  );
};

export default BlogCard;
