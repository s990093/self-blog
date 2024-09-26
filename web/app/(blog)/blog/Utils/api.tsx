import { BlogPrevData } from "@/app/interface/blog";

export const fetchBlogByIds = async (): Promise<{
  data?: BlogPrevData[];
  error?: string;
}> => {
  try {
    const response = await fetch("/api/blogs"); // Replace with your API endpoint
    const data = await response.json();
    return { data: data.blogs }; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: "Failed to fetch blogs." };
  }
};
