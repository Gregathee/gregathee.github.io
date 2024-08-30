import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styled, { keyframes } from 'styled-components';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const data = useStaticQuery(graphql`
  query {
      site {
          siteMetadata {
              name
          }
      }
  }`);
  return (
    <HeroContainer>
      <ContentWrapper>
        <TypingText>Hi, I'm {data.site.siteMetadata.name}...</TypingText>
        <h2>Generalist Software Engineer</h2>
        <p>
           Passionate about building exceptional web applications with a focus on clean, efficient, and scalable solutions. Expertise in JavaScript, React, Node.js, and a knack for learning new technologies..
        </p>
        <CallToAction>View Projects</CallToAction>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;



const fadeIn = keyframes`
  from { opacity: 0; } 
  to { opacity: 1; } 
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

interface TypingTextProps {
  children: React.ReactNode; 
}

const TypingText: React.FC<TypingTextProps> = ({children}) => 
{
  if (children === null || children === undefined) {
    return null;
  }
  
  let text = "";
  if (typeof children === "string") 
  {
    text = children;
  }
  else if (Array.isArray(children) && typeof children[0] === "string") 
  {
    for (let i = 0; i < children.length; i++) 
    {
      text += children[i];
    }
  }

  const getTextWidth = (text: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
      return 0;
    }
    context.font = "16px Courier New";
    const width = context.measureText(text).width;
    return width;
  };
  console.log(getTextWidth(text));
  const typing = keyframes`
      from { width: 0; }
      to { width: ${getTextWidth(text)*1.5}px; }
  `;
  
  const TypingAnimation = styled.h1`
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: .15em solid orange;
      animation: ${typing} 2s steps(${text.length}, end), ${blinkCaret} .75s step-end infinite;
  `;
  return <TypingAnimation>{children}</TypingAnimation>;
}

const ContentWrapper = styled.div` 
  animation: ${fadeIn} 1s ease-in-out;
`;

// Styled Components
const HeroContainer = styled.section`
background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/gun_metal.png');

  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dd0000;
  text-align: center; /* Center content horizontally */
  font-family: 'Courier New', monospace;
`;

const CallToAction = styled.button`
  background-color: #880088;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
`;