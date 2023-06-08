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
import SpeakerImage from "../components/SpeakerImage";

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

const speakers: Speaker[] = [
  {
    name: "Ejiro Asiuwhu",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1490642733291257858/y_SnRmrj_400x400.jpg",
    title: "End-to-end type safety with Nuxt 3",
    abstract:
      "Create type-safe full-stack apps with Nuxt 3 while prioritizing developer experience. Ensure type soundness and avoid runtime errors. With Nuxt 3’s ecosystem, build scalable and robust applications easily. Elevate your development skills and create reliable apps",
    socialLinks: [
      {
        icon: "Twitter",
        link: "https://twitter.com/ejirocodes",
      },
      {
        icon: "Linkedin",
        link: "https://www.linkedin.com/in/ejiro-asiuwhu",
      },
    ],
  },
];
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
