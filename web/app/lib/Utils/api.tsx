// utils/api.js

import axios from "axios";

const DEFAULT_URL = "https://lai.api.iside.space/";

const getApiUrl = (url: string) => {
  const ip = process.env.NEXT_PUBLIC_IP;
  const port = process.env.NEXT_PUBLIC_PORT;
  const http = process.env.NEXT_PUBLIC_HTTP;

  // If none of the environment variables are set, use the default URL
  if (!ip && !port && !http) {
    return `${DEFAULT_URL}${url}`;
  }

  // Otherwise, use the provided environment variables or fallbacks
  const finalIp = ip || "49.213.238.75";
  const finalPort = port || 8000;
  const finalHttp = http?.trim() !== "" ? http : "https";

  return `${finalHttp}://${finalIp}:${finalPort}/${url}`;
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