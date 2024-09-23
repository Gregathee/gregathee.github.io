import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const NavHeader: React.FC<{ siteName: string }> = ({ siteName }) => {
  return (
    <Header>
      <Link to="/">{siteName}</Link>
      <Navigation>
        <NavLink to="/#projects">Games/Projects</NavLink>
        <NavLink to="/#about">About</NavLink>
      </Navigation>
    </Header>
  );
};

export default NavHeader;

const Header = styled.header`
  background-color: #222; // Or a deep gray
  padding: 1.5rem;
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
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #f0f0f0; // Light color for dark background
  transition: color 0.2s;

  &:hover,
  &.active {
    color: #ff0000; // Vibrant red on hover/active
  }
`;