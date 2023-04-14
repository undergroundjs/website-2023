import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${title} - UndergroundJS` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      {/* Primary tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicons/favicon-32x32.png"
      />
      {children}
    </>
  );
};
