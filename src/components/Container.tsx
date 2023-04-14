import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <main className="p-8 bg-white">
      <div className="w-100 max-w-5xl ml-auto mr-auto flex-auto ">
        {children}
      </div>
    </main>
  );
};

export default Container;
