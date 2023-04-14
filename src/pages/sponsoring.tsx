import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import { Check } from "react-feather";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Button from "../components/Button";

const BecomeASponsorPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Hero>
        <Heading>Sponsoring</Heading>
        <p
          style={{
            maxWidth: "50%",
            margin: "auto",
            textAlign: "center",
            fontWeight: "bold",
            padding: "0rem 0 2rem",
          }}
        >
          UndergroundJS will bring together 150 of Nashville's talented
          developer market to share with them some of most amazing things
          happening in our community. From side project and multi-team efforts
          to community involvement and personal growth.
        </p>
      </Hero>
      <Container>
        <p className="mb-8">
          We will be hosting multiple session and long breaks during our single
          day event to promote a learning and social environment.
        </p>
        <p className="mb-8">
          Visit our <Link to="/about">about page</Link> to learn more about our
          mission and meet our organizers.
        </p>
        <div
          style={{
            padding: "1.5rem .5rem",
            backgroundColor: "#cfcfcf",
            marginBottom: "1.5rem",
          }}
        >
          <h4>Platinum (Limit 1) - $8000</h4>
          <p>Logo displayed alongside conference logo</p>
          <p>Branding on all marketing material</p>
          <p>Banner in conference hall on stage</p>
          <p>Large booth in conference hall</p>
          <p>Address attendees during opening</p>
          <p>6 sponsorship tickets</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ padding: "0 1rem 1rem 0" }}>
            <h4>Gold - $4000</h4>
            <p>Branding on all marketing material</p>
            <p>Booth in conference hall</p>
            <p>4 sponsorship tickets</p>
          </div>
          <div style={{ padding: "0 1rem 1rem 0" }}>
            <h4>Silver - $1250</h4>
            <p>Branding on all marketing material</p>
            <p>Small booth in conference hall</p>
            <p>2 sponsorship tickets</p>
          </div>
          <div style={{ padding: "0 1rem 1rem 0" }}>
            <h4>Community - Free</h4>
            <p>Branding on all print material</p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3>Other Sponsorship Options</h3>
          <p>(Limited to 1 each)</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridColumnGap: "10px",
              gridRowGap: "10px",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
          >
            <h4>After Party - $5000</h4>
            <h4>Lunch - $2500</h4>
            <h4>VIP Gift - $1500</h4>
            <h4>Lanyard - $500</h4>
            <h4>Badges - $500</h4>
            <h4>Coffee & Tea - $500</h4>
          </div>
        </div>

        <div
          style={{ textAlign: "center", width: "100%", marginBottom: "1rem" }}
        >
          <Button
            to="mailto:chair@undergroundjs.com?Subject=Sponsorship"
            style={{ backgroundColor: "#f48705", color: "#FFF" }}
          >
            Contact Us
          </Button>
        </div>
      </Container>
      <Footer />
    </Layout>
  );
};

export default BecomeASponsorPage;

export const Head: HeadFC = () => <title>Become A Sponsor</title>;
