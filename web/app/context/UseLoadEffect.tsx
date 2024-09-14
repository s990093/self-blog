"use clinet";

import React from "react";
import { useEffect, useState, ReactNode } from "react";

interface UseLoadEffectProps {
  children: ReactNode[];
}

function useLoadEffect({ children }: UseLoadEffectProps): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkAllLoaded = () => {
      // 确保所有子组件都实现了 `isLoaded` 属性
      const allLoaded = React.Children.toArray(children).every(
        (child) => React.isValidElement(child) && child.props.isLoaded
      );
      setLoaded(allLoaded);
    };

    checkAllLoaded();

    return () => {
      // 清理操作（如果需要）
    };
  }, [children]);

  return loaded;
}

export default useLoadEffect;
