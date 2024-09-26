"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// self
import { BlogCard } from "./components";
import { BlogPrevData } from "@/app/interface/blog";
import { fetchBlogByIds } from "@/app/Utils/api";
import MoreButton from "./components/MoreButton";

const BlogPage = () => {
  const [data, setData] = useState<BlogPrevData[]>([]);
  const [loading, setLoading] = useState(true);

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
        <div className="flex justify-center items-center">
          <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </>
    );
  }

  return (
    <div className="relative mx-auto p-4 min-h-screen bg-gradient-to-br from-darker-blue via-darker-purple to-darker-gray bg-[length:200%_200%] animate-gradient-move">
      <div className="relative">
        <h1 className="text-2xl font-bold mb-6 p-6 text-center">My Blog</h1>
        <div className="absolute top-1/2 right-2">
          <MoreButton onClick={() => {}} />
        </div>
      </div>
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
              photo={data[0].photo}
              isBig={true}
              type={""}
              created_at={""}
            />
          </motion.div>
        )}

        {/* Only render the grid for smaller cards if there's more than one post */}
        {data.length > 1 && (
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.slice(1, 5).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }} // Stagger the animation
              >
                <BlogCard
                  id={post.id}
                  title={post.title}
                  photo={post.photo}
                  type={""}
                  created_at={""}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="relative">
          <h1 className="text-2xl font-bold mb-6 p-6 text-center">More ...</h1>
          <div className="absolute top-1/2 right-2">
            <MoreButton onClick={() => {}} />
          </div>
        </div>
        {/* block */}
        {data.length > 1 && (
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.slice(5).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <BlogCard
                  id={post.id}
                  title={post.title}
                  photo={post.photo}
                  type={""}
                  created_at={""}
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
