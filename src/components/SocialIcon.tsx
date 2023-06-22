import React from "react";
import { Twitter, Linkedin, Icon } from "react-feather";
import { SpeakerLinks } from "../types/speakers";

const socialIconLookup: Record<string, Icon> = {
  Twitter,
  Linkedin,
};

const speakerSocialLink: React.CSSProperties = {
  marginRight: "0.5rem",
};
const SocialIcon: React.FC<SpeakerLinks> = ({ icon, link }) => {
  const Icon = socialIconLookup[icon];
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={speakerSocialLink}
      key={icon}
    >
      <Icon aria-label={icon} />
    </a>
  );
};

export default SocialIcon;
