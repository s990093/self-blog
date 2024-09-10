"use client";
import React, { Component, ReactNode } from "react";

// 定义 `BaseLoad` 组件的 props 类型
interface BaseLoadProps {
  children: ReactNode;
}

// 定义 `BaseLoad` 组件的 state 类型
interface BaseLoadState {
  isLoaded: boolean;
}

// 创建 `BaseLoad` 类组件
class BaseLoad extends Component<BaseLoadProps, BaseLoadState> {
  constructor(props: BaseLoadProps) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    // 模拟加载过程
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000); // 假设加载过程持续 2 秒
  }

  render() {
    const { isLoaded } = this.state;
    const { children } = this.props;

    return <div>{isLoaded ? <>{children}</> : <div>Loading...</div>}</div>;
  }
}

export default BaseLoad;
