import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import LogoLarge from "../images/ugjs-logo-large.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Button from "../components/Button";

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
            <h3>Sept 28, 2023</h3>
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

        <h3>Call for Speakers</h3>

        <p className="mb-8 mt-8">
          We are looking for new and experienced speakers that share a love for
          JavaScript and the Nashville community to present. Our team is
          available to help create and prepare presentation with speakers.
        </p>
        <div
          style={{ textAlign: "center", width: "100%", marginBottom: "1rem" }}
        >
          <Button
            to="https://www.papercall.io/undergroundjs-2023"
            style={{ background: "#f78604", color: "#fff" }}
          >
            Present
          </Button>
        </div>
      </Container>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>UndergroundJS</title>;
