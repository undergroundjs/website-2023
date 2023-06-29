import React from "react";
import * as SponsorLogos from "../images/sponsors";

const sponsors = [
  { name: "Pluralsight", logo: SponsorLogos.Pluralsight },
  { name: "Vaco", logo: SponsorLogos.Vaco },
];

const SponsorList: React.FC<{}> = () => {
  return (
    <div className="w-screen bg-slate-200 p-8 text-center">
      <h3>Our Sponsors</h3>
      <div className="flex flex-row flex-wrap justify-center p-8">
        {sponsors.map((sponsor) => (
          <img
            key={sponsor.name}
            alt={`${sponsor.name} logo`}
            src={sponsor.logo}
            className="w-60 md:w-30 p-4 m-2 bg-white"
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorList;
