import React from "react";
import ReactMarkdown from "react-markdown";

// Define a type for the blog post props
type BlogPostProps = {
  title: string;
  content: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ title }) => {
  const markdown = `
  ## Bug Data

  `;

  return (
    <article className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </header>

      <section className="mb-6">
        <ReactMarkdown className="text-lg text-gray-700">
          {markdown}
        </ReactMarkdown>
      </section>
    </article>
  );
};

export default BlogPost;
