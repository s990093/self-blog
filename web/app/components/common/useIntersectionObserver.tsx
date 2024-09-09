"use client";
import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current; // 將 ref.current 存儲到局部變量
    const observer = new IntersectionObserver(([entry]) => {
      const isIntersecting = entry.isIntersecting;
      setIsVisible(isIntersecting);

      // 當觀察到變化時，記錄狀態到控制台
      if (isIntersecting) {
        console.log("元素進入視窗: ", entry.target);
      } else {
        console.log("元素離開視窗: ", entry.target);
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // 使用局部變量進行清理
      }
    };
  }, [options]);

  return { ref, isVisible };
};

export default useIntersectionObserver;
