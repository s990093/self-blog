// utils/api.js

import axios from "axios";

const getApiUrl = (url: string) => {
  const ip = process.env.NEXT_PUBLIC_IP;
  const port = process.env.NEXT_PUBLIC_PORT || 8000;
  const http = process.env.NEXT_PUBLIC_HTTP || "http"; // 默认为 'http'

  const defaultUrl = "https://lai.iside.space";

  // 确保 IP 和 HTTP 环境变量存在
  if (ip && http) {
    return `${http}://${ip}:${port}/${url}`;
  }

  return defaultUrl;
};

export const recordVisit = async () => {
  try {
    await axios.post(getApiUrl("web/record_visit/")); // 发送 POST 请求，不带任何数据
  } catch (error) {
    console.error("Error recording visit:", error);
    throw error;
  }
};
