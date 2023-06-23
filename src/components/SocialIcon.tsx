import React from "react";
import { Twitter, Linkedin, Icon } from "react-feather";

const socialIconLookup: Record<string, Icon> = {
  Twitter,
  Linkedin,
};

const speakerSocialLink: React.CSSProperties = {
  marginRight: "0.5rem",
};

const SocialIcon: React.FC<{ icon: string; slug: string }> = ({
  icon,
  slug,
}) => {
  const Icon = socialIconLookup[icon];
  const link =
    icon === "Twitter"
      ? `https://twitter.com/${slug}`
      : `https://www.linkedin.com/in/${slug}`;
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
