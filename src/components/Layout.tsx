import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="font-sans flex flex-col h-screen">{children}</div>;
};

export default Layout;
