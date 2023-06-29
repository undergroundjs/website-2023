import React from "react";
import * as SponsorLogos from "../images/sponsors";

const sponsors = [
  { name: "Vaco", logo: SponsorLogos.Vaco },
  { name: "Pluralsight", logo: SponsorLogos.Pluralsight },
];

const SponsorList: React.FC<{}> = () => {
  return (
    <div className="w-screen bg-slate-200 py-8 px-2 text-center">
      <h3>Our Sponsors</h3>
      <div className="flex flex-row flex-wrap justify-center py-8 px-2">
        {sponsors.map((sponsor) => (
          <img
            key={sponsor.name}
            alt={`${sponsor.name} logo`}
            src={sponsor.logo}
            className="h-16 md:h-24 p-4 m-2 bg-white rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorList;
