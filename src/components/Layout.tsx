import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <main className="font-sans flex flex-col h-screen">{children}</main>;
};

export default Layout;
