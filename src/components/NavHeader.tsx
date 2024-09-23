import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const trackLinkClick = (label: string) => {
  // @ts-ignore
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    // @ts-ignore
    window.gtag('event', 'click', {
      event_category: 'Navigation',
      event_label: label,
      transport_type: 'beacon'
    });
  }
};


const NavHeader: React.FC<{ siteName: string }> = ({ siteName }) => {
  return (
    <Header>
      <StyledLink to="/" onClick={() => trackLinkClick('Home')}>{siteName}</StyledLink>
      <Navigation>
        <StyledLink to="/#projects" onClick={() => trackLinkClick('Games/Projects')}>Games/Projects</StyledLink>
        <StyledLink to="/#about" onClick={() => trackLinkClick('About')}>About</StyledLink>
      </Navigation>
    </Header>
  );
};

export default NavHeader;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.large};
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Navigation = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.2s;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;