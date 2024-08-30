import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Banner from '../components/Banner';
import SEO from '../components/SEO';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        title: string;
        bannerLogo: string;
      };
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const siteDescription = 'Your site’s description goes here';

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={siteDescription} />
      <Banner src={data.site.siteMetadata.bannerLogo} />
      <div style={{ justifyContent: 'center', backgroundColor: '#1F1F1F' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: '0 auto' }}>
          <HeroSection />
          <ProjectsSection title="Games/Projects" />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
export const query = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        bannerLogo
      }
    }
  }
`;