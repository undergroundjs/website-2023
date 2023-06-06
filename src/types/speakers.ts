export type SpeakerLinks = {
  icon: "Twitter" | "Linkedin";
  link: string;
};

export type Speaker = {
  name: string;
  imageUrl: string;
  title: string;
  abstract: string;
  socialLinks: SpeakerLinks[];
};
