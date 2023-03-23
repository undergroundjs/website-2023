import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <main className="flex-auto">
        <div
          className="max-w-5xl ml-auto flex-col flex mr-auto p-8 bg-cover bg-center bg-[url('../images/banner-image.jpeg')]"
          style={{ minHeight: "500px" }}
        >
          <h1
            className="text-center text-white my-auto text-5xl"
            style={{ textShadow: "0px 0px 5px black" }}
          >
            JavaScript conference hosted in Nashville.
          </h1>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>UndergroundJS</title>;
