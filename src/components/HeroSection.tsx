import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styled, { keyframes } from 'styled-components';
import TypingText from './TypingText';
import Banner from "./Banner";
import Bubble from "./Bubble";
import ContactSection from "./ContactSection";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const data = useStaticQuery(graphql` query { site { siteMetadata { name, description, bannerLogo } } }`);
  if (!data) return <div>Failed to load site metadata</div>;
  
  return (
    <HeroContainer>
      <Banner src={data.site.siteMetadata.bannerLogo}/>
      <ContentWrapper>
        <Bubble>
          <TypingText>Hi, I'm {data.site.siteMetadata.name}...</TypingText>
        </Bubble>
        <Bubble>
          <h2>Generalist Software Engineer</h2>
        </Bubble>
        <Bubble>
          <Description>{data.site.siteMetadata.description}</Description>
        </Bubble>
        <ContactSection />
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const ContentWrapper = styled.div`
    animation: ${fadeIn} 1s ease-in-out;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem; /* Add some padding for responsiveness */
    color: #f7f;
    font-family: 'Courier New', monospace;
    flex-direction: column; /* Makes the content stack vertically */
    text-shadow: 1px 1px 1px #000000, 2px 2px 2px #000000, 3px 3px 3px #000000, 4px 4px 4px #000000;
`;

const Description = styled.p`
    text-align: left; 
    width: 95%; 
    margin: 0 auto; 
    font-size: 1.2rem;
    line-height: 1.5;
`;
