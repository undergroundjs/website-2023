import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";

const Button: React.FC<GatsbyLinkProps<{}>> = ({ children, to, style }) => {
  return (
    <Link
      to={to}
      style={{
        background: "#fff",
        padding: "1rem 2rem",
        border: "2px solid #5c5c5c",
        textDecoration: "none",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#5c5c5c",
        ...style,
      }}
    >
      {children}
    </Link>
  );
};

export default Button;
