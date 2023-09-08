import * as React from "react";
import { HeadFC, PageProps, StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import LogoLarge from "../images/ugjs-logo-large.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Button from "../components/Button";
import { SEO } from "../components/SEO";
import SpeakerImage from "../components/SpeakerImage";
import SponsorList from "../components/SponsorList";
import { Speaker } from "../types/speakers";

function getRandomNumber(max: number) {
  const min = 0;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomNumberArray(count: number, max: number) {
  const returnArray: number[] = [];
  while (returnArray.length < count) {
    let randomNum = getRandomNumber(max);
    if (!returnArray.includes(randomNum)) {
      returnArray.push(randomNum);
    }
  }
  return returnArray;
}

const featureSpeakersContainer: React.CSSProperties = {
  padding: "2rem 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Hero>
        <img src={LogoLarge} style={{ padding: "5rem 3rem 2rem" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "40em",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <div
            className="flex-auto"
            style={{
              flexDirection: "column",
              flex: "1 1 0",
              padding: "2rem 1rem",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          ></div>
        </div>
      </Hero>
      <Container>
        <h3>UndergroundJS has been cancelled indefinitely.</h3>

        <p className="mb-8 mt-8">
          It is with a heavy heart that we are announcing that we will be
          cancelling UndergroundJS indefinitely.{" "}
        </p>
        <p className="mb-8 mt-8">
          Due to low funding and ticket sales, we will not be able to meet our
          goals necessary to proceed.
        </p>
        <p className="mb-8 mt-8">
          We still highly believe in and support the Nashville community and
          hope that one day we can gather again to celebrate all the amazing
          things that are happening here.
        </p>
      </Container>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
