import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import SkylineSvg from "../images/ugjs-skyline.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <div
        style={{
          minHeight: 320,
          position: "relative",
          color: "#000",
          backgroundImage: `linear-gradient(0, #f4b004, #f78604)`,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${SkylineSvg})`,
            position: "absolute",
            height: "100%",
            width: "100%",
            bottom: "-14px",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            display: "none", // TODO: fix skyline so that it fix properly and doesn't cover and resize weirdly
          }}
        ></div>
        <div style={{ zIndex: 1 }}>
          <h1 style={{ color: "#000" }}>Content</h1>
          <h2 style={{ color: "#000" }}>Subcontent</h2>
          <h3 style={{ color: "#000" }}>Call to Action Btn</h3>
        </div>
      </div>
      <Container>
        <h1>Main Page content</h1>
      </Container>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>UndergroundJS</title>;
