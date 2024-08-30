import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(to bottom, #550055 80%, transparent 100%); 
  color: white;
  padding: 2rem;

  h2 {   
    color: red;
  }   
`;

const ContactSection: React.FC = () => {
  return (
    <Section>
      <h2>Contact</h2>
      {/* Add your details */}
    </Section>
  );
};

export default ContactSection;