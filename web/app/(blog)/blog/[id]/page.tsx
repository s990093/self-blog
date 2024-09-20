"use client";
import { BlogPostDetailProps } from "@/app/interface/blog";
import { fetchBlogDetail } from "@/app/lib/Utils/api";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 支持表格、任务列表等
import rehypeRaw from "rehype-raw"; // 支持 HTML 渲染
import rehypeSanitize from "rehype-sanitize"; // 保证内容安全
import rehypeHighlight from "rehype-highlight"; // 支持代码高亮
import remarkMath from "remark-math"; // 支持数学公式
import rehypeKatex from "rehype-katex"; // 用于渲染数学公式
import "katex/dist/katex.min.css"; // 引入 KaTeX 样式
import { FaHome, FaArrowRight } from "react-icons/fa"; // 引入React Icons
import Link from "next/link";

const BlogPostDetailpage = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<BlogPostDetailProps>();
  const [loading, setLoading] = useState(true);

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
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-full md:max-w-2xl transition-transform transform">
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
          <ReactMarkdown
            className="markdown-content"
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[
              rehypeRaw,
              rehypeSanitize,
              rehypeHighlight,
              rehypeKatex,
            ]}
            remarkRehypeOptions={{ passThrough: ["link"] }}
          >
            {data?.bug_detail}
          </ReactMarkdown>
        </div>
        {/* 下一篇部落格按鈕 */}
        <div className="flex justify-end w-full">
          <Link
            href={`/blog/${params.id + 1}`}
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
