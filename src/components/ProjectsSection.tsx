import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


interface Props {
  title: string;
}
const SectionStyled = styled.section<{ center?: boolean }>`
    /* Replace with your desired styles */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    width: 300px;
`;

const ArticleStyled = styled.article`
    background-color: #111111;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 18px;
`;
const HeaderStyled = styled.h1`
  color: #D0D0D0; 
  text-align: center;
  font-size: 30px; 
  margin: 0;
`;
const LowerBannerStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkStyled = styled(Link)`
  color: #D0D0D0;
  text-decoration: none;
  font-family: Consolas;
  font-size: 18px;
  margin-bottom: 2px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: red;
  }
`;
const DescriptionStyled = styled.p`
  color: #D0D0D0; 
  font-family: Consolas;
  text-align: center;
  font-size: 14px;
`;


const ProjectsSection: React.FC<Props> = ({ title }) => {
  return (
    <SectionStyled>
      <ArticleStyled className="sectionStrip">
        <HeaderStyled>{title}</HeaderStyled>
      </ArticleStyled>
      <LowerBannerStyled className="lowerBanner">
        <LinkStyled to={"../2D%20Game%20Engine.html"} >2D Game Engine(WIP)</LinkStyled>
        <DescriptionStyled> A project I did because I wanted to build something in C++ and take a stab at some graphics programming. </DescriptionStyled>

        <LinkStyled to="../Tower%20Defense.html">Interstellar Defense Engineer 3D(WIP)</LinkStyled>
        <DescriptionStyled> A game idea I’ve had since childhood. A tower defense where you can make the towers. </DescriptionStyled>
        {/* Add more links and descriptions */}
      </LowerBannerStyled>
    </SectionStyled>
  );
};

export default ProjectsSection;