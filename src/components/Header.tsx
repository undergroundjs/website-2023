import React from "react";
import { Link } from "gatsby";

const Header: React.FC = () => {
  return (
    <header className="flex py-2 px-4">
      <Link
        to="/"
        className="font-semibold grow-0 shrink-0 basis-auto py-2 px-4"
      >
        UndergroundJS
      </Link>
    </header>
  );
};

export default Header;
