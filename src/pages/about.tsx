import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { SEO } from "../components/SEO";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Hero>
        <Heading>About UGJS</Heading>
        <p
          style={{
            maxWidth: "50%",
            margin: "auto",
            textAlign: "center",
            fontWeight: "bold",
            padding: "0rem 0 2rem",
          }}
        >
          UndergroundJS was founded to highlight and level up our local
          community. By being community focused, our goal is to share different
          amazing projects, companies, and people in the Nashville community.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "30rem",
            justifyContent: "space-between",
            padding: "1rem 0 2rem",
            margin: "auto",
          }}
        >
          <Button to="/sponsoring">Sponsor</Button>
          <Button to="https://www.eventbrite.com/e/595969038437/">
            Attend
          </Button>
        </div>
      </Hero>
      <Container>
        <h3>The conference</h3>

        <p className="mb-8 mt-8">
          After a successful inaugural event in 2019, UndergroundJS went on
          hiatus due to the COVID-19 pandemic. We are excited to return in 2023
          with years of pent up excitement and energy.
        </p>
        <p className="mb-8">
          UndergroundJS is a nonprofit event facilitated by TechFed Nashville, a
          Tennessee nonprofit organization whose mission is to support and grow
          the grassroots tech talent in Middle Tennessee through educational
          events and groups. TechFed provides financial stewardship, risk
          management and volunteer leadership development for Nashville-area
          technology events.
        </p>
        <p className="font-bold mb-8">
          Join us as we celebrate our accomplishments and failures while
          inspiring and empowering our future.
        </p>
        <h2>Organizers</h2>
        <ul className="mt-1">
          <li>
            Chair,{" "}
            <a href="https://www.linkedin.com/in/kylewelch1/">Kyle Welch</a>
          </li>
          <li>
            Co-Chair,{" "}
            <a href="https://www.linkedin.com/in/sethalexander/">
              Seth Alexander
            </a>
          </li>
          <li>
            Communication Coordinator,{" "}
            <a href="https://www.linkedin.com/in/jeromehardaway/">
              Jerome Hardaway
            </a>
          </li>
        </ul>
      </Container>
      <Footer />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO title="About" />;
