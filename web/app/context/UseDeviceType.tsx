"use client";
import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

const getDeviceType = (): number => {
  if (typeof window === "undefined") {
    return 3; // 默认返回电脑类型
  }

  const width = window.innerWidth || 1024;

  if (width <= 767) {
    return 1; // 手机
  } else if (width <= 1024) {
    return 2; // 平板
  } else {
    return 3; // 电脑
  }
};

export default useDeviceType;
