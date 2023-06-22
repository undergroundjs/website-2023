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
          >
            <h3>Sept 21, 2023</h3>
            <p>Rocketown</p>
            <p>Nashville</p>
          </div>
          <div
            className="flex-auto"
            style={{
              borderLeft: "1px solid black",
              flex: "1 1 0",
              padding: "2rem 0",
              textAlign: "center",
            }}
          >
            <Button to="https://www.eventbrite.com/e/595969038437/">
              Register
            </Button>
          </div>
        </div>
      </Hero>
      <Container>
        <h3>UndergroundJS is excited to be back!</h3>

        <p className="mb-8 mt-8">
          After a successful inaugural event in 2019, UndergroundJS went on
          hiatus due to the COVID-19 pandemic. We are excited to return in 2023
          with years of pent up excitement and energy.
        </p>

        <h3>Featured Speakers</h3>

        <StaticQuery
          query={graphql`
            query GetFeaturedSpeakersPageData {
              allSpeakersJson {
                nodes {
                  name
                  avatar
                  title
                  twitter
                }
              }
            }
          `}
          render={(data) => {
            const speakerList: Partial<Speaker>[] = data.allSpeakersJson.nodes;
            const featureSpeakerCount = 4;
            const randomNums = getRandomNumberArray(
              featureSpeakerCount,
              speakerList.length
            );
            const speakerComponents = speakerList
              .filter((_, index) => randomNums.includes(index))
              .map((speaker) => (
                <SpeakerImage key={speaker.name} {...speaker} />
              ));
            return (
              <div style={featureSpeakersContainer}>{speakerComponents}</div>
            );
          }}
        />
      </Container>
      <SponsorList />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
