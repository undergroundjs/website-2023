import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <main className="w-100 max-w-5xl ml-auto mr-auto p-8 flex-auto">
      {children}
    </main>
  );
};

export default Container;
