import React from 'react';
import styled from 'styled-components';

// Styled components for better layout and design
const FeatureContainer = styled.div`
    margin-top: 20px;
`;

const FeatureList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const FeatureItem = styled.li`
    margin-bottom: 20px;
`;

const FeatureTitle = styled.h4`
    margin-bottom: 5px;
`;

const FeatureImage = styled.img`
    max-width: 100%;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const SectionHeader = styled.h3`
    color: #9c27b0; /* Match heading color with active tab color */
    text-shadow: 1px 1px 1px #000000;
  `;

const ProjectA: React.FC = () => {
  const tools = [
    {name: 'Custom Pathfinding Algorithm', image: '/icon.png'},
    {name: 'Dynamic Lighting System', image: '/icon.png'},
    {name: 'Procedural Generation Toolkit', image: '/icon.png'},
  ];

  const gameplayFeatures = [
    {feature: 'Open World Exploration', image: '/icon.png', description: 'Explore a vast world with dynamic weather and day-night cycles.'},
    {feature: 'Real-time Combat', image: '/icon.png', description: 'Engage in combat with AI that adapts to your fighting style.'},
    // Add more features as needed
  ];

  return (
    <FeatureContainer>
      <SectionHeader>Tools Developed:</SectionHeader>
      <FeatureList>
        {tools.map((tool, index) => (
          <FeatureItem key={index}>
            <FeatureTitle>{tool.name}</FeatureTitle>
            <FeatureImage src={tool.image} alt={tool.name} />
          </FeatureItem>
        ))}
      </FeatureList>

      <SectionHeader>Gameplay Features:</SectionHeader>
      <FeatureList>
        {gameplayFeatures.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureTitle>{feature.feature}</FeatureTitle>
            <FeatureImage src={feature.image} alt={feature.feature} />
            <p>{feature.description}</p>
          </FeatureItem>
        ))}
      </FeatureList>
    </FeatureContainer>
  );
};

export default ProjectA;