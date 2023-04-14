import React from "react";

type Props = {
  children: React.ReactNode;
};

const shadowBorder = (strokeWidth: number, color: string): string => {
  const shadow = [];

  for (let i = strokeWidth * -1; i <= strokeWidth; i++) {
    for (let j = strokeWidth * -1; j <= strokeWidth; j++) {
      shadow.push(`${i * 1}px ${j * 1}px 0 ${color}`);
    }
  }

  return shadow.join(", ");
};

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <h2
      style={{
        fontFamily: "'Sedgwick Ave Display', cursive",
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
        padding: "4rem 2rem 2rem",
        textShadow: shadowBorder(4, "#000"),
      }}
    >
      {children}
    </h2>
  );
};

export default Heading;
