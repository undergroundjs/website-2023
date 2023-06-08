import React from "react";
import { Speaker } from "../types/speakers";
import SocialIcon from "./SocialIcon";
const speakerContainer: React.CSSProperties = {
  position: "relative",
  height: 150,
  width: 150,
  borderRadius: "50%",
  marginRight: "2rem",
  marginBottom: "2rem",
  overflow: "hidden",
};

const speakerImgStyles: React.CSSProperties = {
  height: 150,
  width: 150,
  borderRadius: "50%",
  marginRight: "2rem",
};

const speakerNameContainer: React.CSSProperties = {
  position: "absolute",
  top: 0,
  bottom: 0,
  color: "white",
};

const speakerNameOverlay: React.CSSProperties = {
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",

  position: "absolute",
  top: 0,
  bottom: 0,
};

const speakerNameTextContainer: React.CSSProperties = {
  position: "relative",
  padding: "34px 16px",
};

const socialLinkContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: "8px",
};

const socialIconLimit = 2;

const SpeakerImage: React.FC<Partial<Speaker>> = ({
  avatar,
  name,
  title,
  twitter,
}) => {
  return (
    <div style={speakerContainer} className="group">
      <img src={avatar} style={speakerImgStyles} />
      <div style={speakerNameContainer} className="hidden group-hover:block">
        <div style={speakerNameOverlay} />
        <div style={speakerNameTextContainer}>
          <h3 style={{ fontSize: ".9rem" }}>{name}</h3>

          <h4 style={{ fontSize: ".7rem" }}>{title}</h4>
          <div style={socialLinkContainer}>
            {twitter ? <SocialIcon icon="Twitter" url={twitter} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerImage;
