import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Body from '../components/Body';
import {ThemeProvider} from "styled-components";

const theme = {
  colors: {
    primary: '#222',
    secondary: '#f0f0f0',
    accent: '#ff0000',
    background: '#000000', // or whichever background you prefer
  },
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Courier New', monospace",
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
};

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
    <ThemeProvider theme={theme}>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <Layout>
        <Body bannerLogo={"icon.png"} />
      </Layout>
    </ThemeProvider>
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
