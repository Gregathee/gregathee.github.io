import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';
import NavHeader from "./NavHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  return (
    <LayoutContainer>
      <NavHeader siteName={data.site.siteMetadata.name} />
      <MainContent>{children}</MainContent>
      <Footer>
        © {new Date().getFullYear()} {data.site.siteMetadata.name} - All Rights Reserved
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  background-color: black; 
  font-family: 'Montserrat', sans-serif; // Update with your chosen font
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
`;

const Footer = styled.footer`
  background-color: #222;
  color: #f0f0f0;
  padding: 1rem;
  text-align: center;
`;