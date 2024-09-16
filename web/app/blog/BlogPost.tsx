import React from "react";

// Define a type for the blog post props
type BlogPostProps = {
  title: string;
  content: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
  return (
    <article className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </header>
      <section className="mb-6">
        <p className="text-lg text-gray-700">{content}</p>
      </section>
      <footer className="text-center mt-6">
        <p className="text-xl text-gray-600">敬启期待</p>
      </footer>
    </article>
  );
};

export default BlogPost;
