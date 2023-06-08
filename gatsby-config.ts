import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `UndergroundJS`,
    description: `Nashville's ultimate JavaScript event on September 21, 2023! The single-track conference focuses on JavaScript & the Nashville dev community.`,
    twitterUsername: `@undergroundjs`,
    image: `/banner-image.jpeg`,
    siteUrl: `https://undergroundjs.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138176222-1",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "speakers",
        path: `${__dirname}/src/data/speakers.json`,
      },
    },
  ],
};

export default config;
