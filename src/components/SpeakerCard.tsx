import React from "react";
import { Speaker } from "../types/speakers";
import { useWindowWidth } from "@react-hook/window-size";
import SocialIcon from "./SocialIcon";

const speakerImgStyles: React.CSSProperties = {
  height: 150,
  width: 150,
  borderRadius: "50%",
  marginRight: "2rem",
};

const speakerNameContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const speakerSocialLink: React.CSSProperties = {
  marginRight: "0.5rem",
};

const windowMobileWidth = 640;

const SpeakerCard: React.FC<Partial<Speaker>> = ({
  avatar,
  name,
  title,
  abstract,
  twitter,
}) => {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = React.useState<boolean>(
    () => windowWidth <= windowMobileWidth
  );

  React.useEffect(() => {
    setIsMobile(windowWidth <= windowMobileWidth);
  }, [windowWidth]);

  const speakerContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    margin: "2rem 0",
  };
  return (
    <div style={speakerContainer}>
      <img src={avatar} style={speakerImgStyles} />
      <div>
        <div style={speakerNameContainer}>
          <h3 style={{ marginRight: "1rem" }}>{name}</h3>
          {twitter ? <SocialIcon icon="Twitter" link={twitter} /> : null}
        </div>
        <h4>{title}</h4>
        <p>{abstract}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
