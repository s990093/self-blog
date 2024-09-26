// types/blog.ts
export interface BlogPrevData {
  id: number;
  title: string;
  photo: string;
  type: string;
  created_at: string;
  isBig?: boolean;
}

export interface BlogCardProps extends BlogPrevData {}
export interface BlogPostDetailProps extends BlogCardProps {
  md_content: string;
}
