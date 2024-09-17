import React from "react";
import BlogPost from "./BlogPost";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <BlogPost
        title="我的第一篇博客文章"
        content="这是博客文章的内容。这里可以写下你想分享的内容。"
      />
    </div>
  );
};

export default BlogPage;
