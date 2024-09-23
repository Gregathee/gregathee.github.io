import React from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './projects/ProjectsSection';
import AboutSection from './AboutSection';
import styled from 'styled-components';

interface BodyProps {bannerLogo: string;}

const Body: React.FC<BodyProps> = () => {
  return (
      <BodyContainer>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </BodyContainer>
  );
};

export default Body;

const BodyContainer = styled.div`
  background-image: url('https://img.freepik.com/premium-vector/abstract-vector-dark-gray-violet-technology-background_156943-1547.jpg?w=996');
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;