"use client";
export const generateRandomPosition = () => {
  const angle = Math.random() * 360;
  const radius = 200; // Adjust the radius as needed

  const x = radius * Math.cos(angle * (Math.PI / 180));
  const y = radius * Math.sin(angle * (Math.PI / 180));

  return { x, y };
};

export const getDeviceType = (): number => {
  if (typeof window === "undefined") {
    // 在非浏览器环境中返回一个默认值
    return 3; // 默认返回电脑类型
  }

  const width = window.innerWidth || 1024; // 提供一个默认宽度

  if (width <= 767) {
    // 手机
    return 1;
  } else if (width <= 1024) {
    // 平板
    return 2;
  } else {
    // 电脑
    return 3;
  }
};
