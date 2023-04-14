import * as React from "react";
import SkylineSvg from "../images/ugjs-skyline.svg";

type Props = {
  children: React.ReactNode;
};

const Hero: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        minHeight: 320,
        position: "relative",
        color: "#000",
        backgroundImage: `linear-gradient(0, #f4b004, #f78604)`,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${SkylineSvg})`,
          position: "absolute",
          height: "100%",
          width: "100%",
          bottom: "-14px",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          display: "none", // TODO: fix skyline so that it fix properly and doesn't cover and resize weirdly
        }}
      ></div>
      <div className="w-100 max-w-5xl ml-auto mr-auto ">{children}</div>
    </div>
  );
};

export default Hero;
