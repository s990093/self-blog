export interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  imageUrl?: string;
  isBig?: boolean;
}
export interface BlogPostDetailProps {
  id: number;
  title: string;
  bug_detail: string;
}

// types/blog.ts
export interface BlogPrevData {
  id: number;
  title: string;
  preview_image: string;
}
