import { logger, consoleTransport } from "react-native-logs";

// Logger 配置
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

// 環境變數
const ENV = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost",
  DJANGO_DNS: process.env.NEXT_PUBLIC_DJANGO_DNS || "",
  IP: process.env.NEXT_PUBLIC_IP || "localhost",
  PORT: process.env.NEXT_PUBLIC_PORT || "3000",
  HTTP: process.env.NEXT_PUBLIC_HTTP || "http",
  USE_PUBLIC: process.env.NEXT_PUBLIC_USE_PUBLIC === "true",
  ENV_MODE: process.env.NEXT_PUBLIC_ENV || "development", // 模式：development 或 production
  BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "", // 部署時的子目錄，例如 /self-blog
};

/**
 * 根據給定的 path 生成靜態文件的完整 URL。
 * @param {string} path - 靜態文件的路徑
 * @returns {string} - 完整的 URL
 */
export function getStaticUrl(path: string): string {
  const formattedPath = path.replace(/^\//, ""); // 移除開頭的斜線

  // 根據環境模式添加 basePath
  const basePathPrefix = ENV.ENV_MODE === "production" ? ENV.BASE_PATH : "";

  if (ENV.USE_PUBLIC) {
    // 直接返回相對路徑，包含 basePath（如果有）
    return `${basePathPrefix}/${formattedPath}`;
  }

  // 完整 URL，包含 basePath
  return `${ENV.BASE_URL}:${ENV.PORT}${basePathPrefix}/${formattedPath}`;
}

/**
 * 根據 Django 服務器的地址獲取靜態資源 URL。
 * @param {string} path - 靜態文件的路徑
 * @returns {string} - 完整的 URL
 */
export function getDjangoStaticUrl(path: string): string {
  const formattedPath = path.replace(/^\//, "");

  // 根據環境模式添加 basePath
  const basePathPrefix = ENV.ENV_MODE === "production" ? ENV.BASE_PATH : "";

  if (ENV.USE_PUBLIC) {
    return `${basePathPrefix}/${formattedPath}`; // 相對路徑，包含 basePath
  }

  if (!ENV.IP && !ENV.PORT && !ENV.HTTP) {
    return `${ENV.DJANGO_DNS}${basePathPrefix}/${formattedPath}`;
  }

  return `${ENV.HTTP}://${ENV.IP}:${ENV.PORT}${basePathPrefix}/${formattedPath}`;
}
