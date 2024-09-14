"use client";
import React from "react";
import useLoadEffect from "./UseLoadEffect";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const allLoaded = useLoadEffect({
    children: React.Children.toArray(children),
  });

  return <div>{allLoaded ? <div>{children}</div> : <div>Loading...</div>}</div>;
};

export default Layout;
