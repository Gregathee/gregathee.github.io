import React from 'react';
import styled from "styled-components";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {graphql, useStaticQuery} from "gatsby";

const ContactSection: React.FC = () => {
  const data = useStaticQuery(graphql` query { site { siteMetadata { linkedin, github } } }`);
  if (!data) return <div>Failed to load site metadata</div>;
  
  return (
      <ContactContainer>
        <Button href="/resume.pdf" bgColor="#880088" target="_blank" rel="noopener noreferrer"> Resume </Button>
        <Button href={data.site.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} /> 
        </Button>
        <Button href={data.site.siteMetadata.github} bgColor="#793ec6" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </Button>
      </ContactContainer>
  );
}

export default ContactSection;

const ContactContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
`;

const Button = styled.a<{ bgColor?: string }>`
    display: inline-flex;
    align-items: center;
    background-color: ${({ bgColor }) => bgColor || "#0077b5"};
    color: white;
    padding: 1rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ bgColor }) => darkenColor(bgColor || "#0077b5", 20)};
    }
`;

// Helper function to darken the color on hover
const darkenColor = (color: string, percent: number) => {
  let num = parseInt(color.replace("#", ""), 16);
  let amt = Math.round(2.55 * percent);
  let R = (num >> 16) + amt;
  let G = ((num >> 8) & 0x00ff) + amt;
  let B = (num & 0x0000ff) + amt;

  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
};
