// utils/urlUtils.js

// 获取环境变量 BASE_URL，若未设置则使用默认值
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://lai.iside.space/static/";

/**
 * 根据给定的 path 生成静态文件的完整 URL。
 *
 * @param {string} path - 静态文件的路径
 * @returns {string} - 完整的 URL
 */
export function getStaticUrl(path: string): string {
  // 移除 path 开头的斜杠，以避免重复的斜杠
  const formattedPath = path.replace(/^\//, "");

  // 拼接 BASE_URL 和路径
  return `${BASE_URL}${formattedPath}`;
}
