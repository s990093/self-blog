"use client";
// context/AppContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// 定义状态类型
interface AppState {
  user: { name: string } | null;
  theme: "light" | "dark";
}

// 定义 Context 类型
interface AppContextType {
  state: AppState;
  setUser: (user: { name: string } | null) => void;
  setTheme: (theme: "light" | "dark") => void;
}

// 创建 Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// 创建 Provider 组件
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AppState>({
    user: null,
    theme: "light",
  });

  const setUser = (user: { name: string } | null) =>
    setState((prevState) => ({ ...prevState, user }));
  const setTheme = (theme: "light" | "dark") =>
    setState((prevState) => ({ ...prevState, theme }));

  return (
    <AppContext.Provider value={{ state, setUser, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// 创建自定义 Hook 来使用 Context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
