import { graphql, useStaticQuery } from "gatsby";

const SITE_METADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        twitterUsername
        image
        siteUrl
      }
    }
  }
`;

export interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      twitterUsername: string;
      image: string;
      siteUrl: string;
    };
  };
}

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadataQuery>(SITE_METADATA_QUERY);

  return { ...siteMetadata };
};
