import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Body from '../components/Body';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        bannerLogo: string;
        description: string;
      };
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <Layout>
        <Body bannerLogo={data.site.siteMetadata.bannerLogo} />
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        bannerLogo
      }
    }
  }
`;
