// utils/api.js

import axios from "axios";

const getApiUrl = (url: string) => {
  const ip = process.env.NEXT_PUBLIC_IP || "49.213.238.75";
  const port = process.env.NEXT_PUBLIC_PORT || 8000;
  const http = process.env.NEXT_PUBLIC_HTTP || "http"; // 默认为 'http'

  return `${http}://${ip}:${port}/${url}`;
};

export const recordVisit = async () => {
  try {
    // console.log(getApiUrl("web/record_visit/"));
    await axios.post(getApiUrl("web/record_visit/")); // 发送 POST 请求，不带任何数据
  } catch (error) {
    console.error("Error recording visit:", error);
    throw error;
  }
};
