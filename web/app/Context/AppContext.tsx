"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import NotificationList from "../components/Common/NotificationListProps";
import { NOTIFICATION_DELAY } from "../cfg/control";

// 定义状态类型
interface AppState {
  user: { name: string } | null;
  theme: "light" | "dark";
  notifications: { id: number; message: string }[]; // 添加 notifications
}

// 定义 Context 类型
interface AppContextType {
  state: AppState;
  setUser: (user: { name: string } | null) => void;
  setTheme: (theme: "light" | "dark") => void;
  addNotification: (message: string) => void; // 添加 addNotification
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
    notifications: [], // 初始化 notifications
  });

  const setUser = (user: { name: string } | null) =>
    setState((prevState) => ({ ...prevState, user }));

  const setTheme = (theme: "light" | "dark") =>
    setState((prevState) => ({ ...prevState, theme }));

  const addNotification = (message: string) => {
    const id = Date.now();
    setState((prevState) => ({
      ...prevState,
      notifications: [...prevState.notifications, { id, message }],
    }));

    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        notifications: prevState.notifications.filter(
          (notification) => notification.id !== id
        ),
      }));
    }, NOTIFICATION_DELAY); // 3 seconds
  };

  return (
    <AppContext.Provider value={{ state, setUser, setTheme, addNotification }}>
      {children}
      <NotificationList notifications={state.notifications} />
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
