import { logger, consoleTransport } from "react-native-logs";

const config = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
    extensionColors: {
      root: "magenta",
      home: "green",
    },
  },
};

export const log = logger.createLogger(config);
export const rootLog = log.extend("root");
export const homeLog = log.extend("home");

// 获取环境变量 BASE_URL，若未设置则使用默认值
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://lai.iside.space/static/";
const ip = process.env.NEXT_PUBLIC_IP;
const port = process.env.NEXT_PUBLIC_PORT;
const http = process.env.NEXT_PUBLIC_HTTP;

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

export function getDjangoStaticUrl(path: string): string {
  const finalIp = ip || "49.213.238.75";
  const finalPort = port || 8000;
  const finalHttp = http?.trim() !== "" ? http : "https";

  return `${finalHttp}://${finalIp}:${finalPort}${path}`;
}
