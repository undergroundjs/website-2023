import React from "react";
import { Link } from "gatsby";
import { Twitter } from "react-feather";

const Footer: React.FC = () => {
  return (
    <footer className="min-w-0 flex py-4">
      <div className="w-full max-w-5xl min-w-0 mx-auto p-8">
        <div className="mx-3 flex justify-center">
          <div className="mr-auto w-32">
            <Link
              className="no-underline text-black"
              to="https://2019.undergroundjs.com"
            >
              2019 Archive
            </Link>
          </div>
          <div>
            <Link className="no-underline text-black" to="/code-of-conduct">
              Code of Conduct
            </Link>
          </div>
          <div className="flex ml-auto w-32">
            <Link
              title="Follow us on Twitter"
              to="https://twitter.com/undergroundjs"
              className="ml-auto"
            >
              <Twitter color="black" />
            </Link>
          </div>
        </div>
        <div className="m-3">
          <p className="text-center text-xs">© 2023 UndergroundJS, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
