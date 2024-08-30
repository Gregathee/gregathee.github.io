import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(to bottom, #1a1a1a 80%, transparent 100%); 
  color: white;
  padding: 2rem;

  h2 {
    color: red;
  }
`;

const AboutSection: React.FC = () => {
  return (
    <Section>
      <h2>About Me</h2>
      {/* Add your details */}
    </Section>
  );
};

export default AboutSection;  