import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <h2>About</h2>
        <p className="mb-8">
          UndergroundJS was founded to highlight and level up our local
          community. By being community focused, our goal is to share different
          amazing projects, companies, and people in the Nashville community.
        </p>
        <p className="mb-8">
          After a successful inaugural event in 2019, UndergroundJS went on
          hiatus due to the COVID-19 pandemic. We are excited to return in 2023
          with years of pent up excitement and energy.
        </p>
        <p className="mb-8">
          Underground JS is a nonprofit event facilitated by TechFed Nashville,
          a Tennessee nonprofit organization whose mission is to support and
          grow the grassroots tech talent in Middle Tennessee through
          educational events and groups. TechFed provides financial stewardship,
          risk management and volunteer leadership development for
          Nashville-area technology events.
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
          More to come...
        </ul>
      </Container>
      <Footer />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
