"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// self
import { BlogCard } from "./components";
import { BlogPrevData } from "@/app/interface/blog";
import { fetchBlogByIds } from "@/app/lib/Utils/api";

const BlogPage = () => {
  const [data, setData] = useState<BlogPrevData[]>([]); // 初始化为数组
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBlogByIds();
        if (response.error) {
          // Handle error
        } else {
          setData(response.data || []);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <div>load</div>
      </>
    );
  }

  return (
    <div className="relative mx-auto p-4 min-h-screen bg-gradient-to-br from-darker-blue via-darker-purple to-darker-gray bg-[length:200%_200%] animate-gradient-move">
      <h1 className="text-2xl font-bold mb-6 p-6 text-center">My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Check if there is at least one post */}
        {data.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
          >
            <BlogCard
              key={data[0].id}
              id={data[0].id}
              title={data[0].title}
              excerpt={""}
              imageUrl={data[0].preview_image}
              isBig={true}
            />
          </motion.div>
        )}

        {/* Only render the grid for smaller cards if there's more than one post */}
        {data.length > 1 && (
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }} // Stagger the animation
              >
                <BlogCard
                  id={post.id}
                  title={post.title}
                  excerpt={""}
                  imageUrl={post.preview_image}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
