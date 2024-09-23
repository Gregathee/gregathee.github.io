import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';
import NavHeader from "./NavHeader";

interface LayoutProps { children: React.ReactNode; }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`query { site { siteMetadata { name } } }`);

  if (!data) return <div>Failed to load site metadata</div>;

  return (
    <LayoutContainer>
      <NavHeader siteName={data.site.siteMetadata.name} />
      <>{children}</>
      <Footer>© {new Date().getFullYear()} {data.site.siteMetadata.name} - All Rights Reserved</Footer>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background}; 
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    padding: ${({ theme }) => theme.spacing.medium};
    text-align: center;
`;