import React from "react";
import { Link } from "gatsby";
import { Twitter } from "react-feather";
import LogoSmall from "../images/ugjs-logo-sm.png";
import TwitterLogo from "../images/twitter-icon.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <div style={{ backgroundColor: "#000", padding: "32px 24px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <img src={LogoSmall} style={{ height: "48px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a href="/code-of-conduct">Code of Conduct</a>
            <p>UndergroundJS, 2023</p>
          </div>
          <a href="https://twitter.com/undergroundjs">
            <img src={TwitterLogo} style={{ height: "48px" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
