import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import { Check } from "react-feather";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

const BecomeASponsorPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <h2>Sponsoring</h2>
        <p className="mb-8">
          UndergroundJS will bring together 250 of Nashville's talented
          developer market to share with them some of most amazing things
          happening in our community. From side project and multi-team efforts
          to community involvement and personal growth.
        </p>
        <p className="mb-8">
          We will be hosting multiple session and long breaks during our single
          day event to promote a learning and social environment.
        </p>
        <p className="mb-8">
          Visit our <Link to="/about">about page</Link> to learn more about our
          mission and meet our organizers.
        </p>
        <h4 className="text-black">
          Here are a list of our sponsorship offerings:
        </h4>
        <ul className="list-disc list-inside">
          <li>Booth (high-top, 4' or 6')</li>
          <li>Branding on T-Shirts</li>
          <li>Branding on Banners</li>
          <li>Branding on Printed Media</li>
          <li>Branding on Website</li>
          <li>Conference Tickets</li>
        </ul>
        <h4 className="text-black mt-2">Exclusive Sponsorship Options:</h4>
        <ul className="list-disc list-inside">
          <li>After party host</li>
          <li>Breakfast or Lunch</li>
          <li>Coffee</li>
          <li>Lanyard</li>
          <li>Badges</li>
          <li>Swag Bag</li>
          <li>VIP Dinner (Speakers and Volunteers)</li>
          <li>Address attendees during opening remarks</li>
        </ul>
        <h4 className="text-black mt-8">Sponsorship Tiers</h4>
        <div className="grid grid-cols-[35%_25%_15%_15%_10%]">
          <div className="text-center font-bold px-1 py-2">Benefit</div>
          <div className="text-center font-bold bg-[#f5b004] px-1 py-2">
            Platinum
          </div>
          <div className="text-center font-bold px-1 py-2">Gold</div>
          <div className="text-center font-bold px-1 py-2">Silver</div>
          <div className="text-center font-bold px-1 py-2">Community</div>
          <div className="px-1 py-2" />
          <p className="text-center italic bg-[#f5b004] px-1 py-2">$8,000</p>
          <p className="text-center italic px-1 py-2">$4,000</p>
          <p className="text-center italic px-1 py-2">$1,250</p>
          <p className="text-center italic px-1 py-2">$0</p>
          <p className="px-1 py-2">Limited to</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">1</p>
          <p className="text-center px-1 py-2">3</p>
          <p className="text-center px-1 py-2">3</p>
          <p className="text-center px-1 py-2">&infin;</p>
          <p className="bg-[#f5b004] px-1 py-2">Branding in conference media</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="px-1 py-2">Branding in conference hall</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <div className="px-1 py-2" />
          <p className="bg-[#f5b004] px-1 py-2">
            Branding on conference t-shirt
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <div className="bg-[#f5b004] px-1 py-2" />
          <div className="bg-[#f5b004] px-1 py-2" />
          <p className="px-1 py-2">Booth in conference hall</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center px-1 py-2">Cocktail table</p>
          <div className="px-1 py-2" />
          <p className="bg-[#f5b004] px-1 py-2">Banner on stage</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <div className="bg-[#f5b004] px-1 py-2" />
          <div className="bg-[#f5b004] px-1 py-2" />
          <div className="bg-[#f5b004] px-1 py-2" />
          <p className="px-1 py-2">Adress conference attendees</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <div className="px-1 py-2" />
          <div className="px-1 py-2" />
          <div className="px-1 py-2" />
          <p className="bg-[#f5b004] px-1 py-2">Scholarship tickets*</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">5</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">3</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">1</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">0</p>
          <p className="px-1 py-2">Conference tickets</p>
          <p className="text-center px-1 py-2">6</p>
          <p className="text-center px-1 py-2">4</p>
          <p className="text-center px-1 py-2">2</p>
          <p className="text-center px-1 py-2">0</p>
        </div>
        <p className="text-sm mb-8">
          * A part of the sponsorship goes to provide free tickets to those in
          need.
        </p>
        <h4 className="text-black mt-2">A La Carte Sponsorship Options</h4>
        <div className="grid grid-cols-[28%_12%_12%_12%_12%_12%_12%]">
          <div className="text-center font-bold px-1 py-2">Benefit</div>
          <div className="text-center font-bold px-1 py-2">After Party</div>
          <div className="text-center font-bold px-1 py-2">Lunch</div>
          <div className="text-center font-bold px-1 py-2">VIP Gift</div>
          <div className="text-center font-bold px-1 py-2">Lanyard</div>
          <div className="text-center font-bold px-1 py-2">Badge</div>
          <div className="text-center font-bold px-1 py-2">Coffee</div>
          <div className="px-1 py-2" />
          <p className="text-center italic px-1 py-2">$5,000</p>
          <p className="text-center italic px-1 py-2">$2,500</p>
          <p className="text-center italic px-1 py-2">$1,500</p>
          <p className="text-center italic px-1 py-2">$500</p>
          <p className="text-center italic px-1 py-2">$500</p>
          <p className="text-center italic px-1 py-2">$500</p>
          <p className="px-1 py-2">Limited to</p>
          <p className="text-center px-1 py-2">1</p>
          <p className="text-center px-1 py-2">1</p>
          <p className="text-center px-1 py-2">1</p>
          <p className="text-center px-1 py-2">1</p>
          <p className="text-center px-1 py-2">1</p>
          <p className="text-center px-1 py-2">1</p>
          <p className="bg-[#f5b004] px-1 py-2">Branding in conference media</p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center bg-[#f5b004] px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="px-1 py-2">Branding on conference t-shirt</p>
          <p className="text-center px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <p className="text-center px-1 py-2">
            <Check className="mx-auto" />
          </p>
          <div className="px-1 py-2" />
          <div className="px-1 py-2" />
          <div className="px-1 py-2" />
          <p className="bg-[#f5b004] px-1 py-2">Conference tickets</p>
          <p className="bg-[#f5b004] text-center px-1 py-2">2</p>
          <p className="bg-[#f5b004] text-center px-1 py-2">2</p>
          <p className="bg-[#f5b004] text-center px-1 py-2">1</p>
          <p className="bg-[#f5b004] text-center px-1 py-2">1</p>
          <p className="bg-[#f5b004] text-center px-1 py-2">1</p>
          <p className="bg-[#f5b004] text-center px-1 py-2">1</p>
        </div>
        <p className="my-8">
          We want to provide you with the best sponsoring experience custom for
          your business. To find out more email us.
        </p>
        <a href="mailto:chair@undergroundjs.com?Subject=Sponsorship">
          <button className="bg-[#f48705] text-white p-4 rounded font-semibold">
            Contact Us
          </button>
        </a>
      </Container>
      <Footer />
    </Layout>
  );
};

export default BecomeASponsorPage;

export const Head: HeadFC = () => <title>Become A Sponsor</title>;
