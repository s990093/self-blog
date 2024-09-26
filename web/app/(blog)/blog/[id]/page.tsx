"use client";
import { BlogPostDetailProps } from "@/app/interface/blog";
import { fetchBlogDetail } from "@/app/Utils/api";
import React, { useEffect, useState } from "react";
import { MdPreview, MdCatalog } from "md-editor-rt";
import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa"; // 引入React Icons
import Link from "next/link";
import "md-editor-rt/lib/preview.css";

const scrollElement = document.documentElement;

const BlogPostDetailpage = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<BlogPostDetailProps>();
  const [loading, setLoading] = useState(true);
  const [id] = useState("preview-only");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBlogDetail(params.id);
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
      <div className="min-h-screen flex items-center justify-center p-6">
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-3/4 transition-transform transform">
        <div className="flex justify-start w-full">
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-500 flex items-center"
          >
            <FaHome className="mr-2" />
            回到主頁
          </Link>
        </div>
        <div className="text-gray-600 leading-relaxed mb-6">
          {data?.id && (
            <>
              <MdPreview
                editorId={id}
                modelValue={data?.md_content}
                language="en-Us"
              />
              <MdCatalog editorId={id} scrollElement={scrollElement} />
            </>
          )}
        </div>
        {/* 下一篇部落格按鈕 */}
        <div className="flex justify-between w-full mt-4">
          {/* If id is greater than 1, show the previous blog link */}
          {Number(params.id) > 1 && (
            <Link
              href={`/blog/${Number(params.id) - 1}`}
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              上一篇部落格
            </Link>
          )}

          <Link
            href={`/blog/${Number(params.id) + 1}`}
            className="text-gray-700 hover:text-blue-500 flex items-center"
          >
            下一篇部落格
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetailpage;
