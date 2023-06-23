import * as React from "react";
import { HeadFC, PageProps, StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero";
import { SEO } from "../components/SEO";
import Heading from "../components/Heading";
import SpeakerCard from "../components/SpeakerCard";
import { Speaker } from "../types/speakers";

const SpeakersPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Hero>
        <Heading>Speakers</Heading>
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
      </Hero>
      <StaticQuery
        query={graphql`
          query GetSpeakersPageData {
            allSpeakersJson {
              nodes {
                name
                avatar
                title
                twitter
                abstract
              }
            }
          }
        `}
        render={(data) => {
          const speakerList = data.allSpeakersJson.nodes.map(
            (speaker: Partial<Speaker>) => <SpeakerCard {...speaker} />
          );

          return (
            <Container>
              <h3>Our Speakers</h3>
              {speakerList}
            </Container>
          );
        }}
      />
      <Footer />
    </Layout>
  );
};

export default SpeakersPage;

export const Head: HeadFC = () => <SEO />;
