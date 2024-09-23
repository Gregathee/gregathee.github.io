import React from 'react';
import styled from 'styled-components';
import EducationSection from "./EducationSection";
import Bubble from "./Bubble";
import SkillsSection from "./SkillsSection";

const AboutSection: React.FC = () => {
  return (
    <Bubble maxWidth={"auto"}>
      <Section id={"about"}>
        <h2>About Me</h2>
        <AboutText>
          <h3>Formal Education</h3>
          <p>
            I have a Bachelor of Science in Computer Science with a concentration in Computer Game Technology from Bradley
            University.<br/><br/>
            Some topics I've learned were:
          </p>
        </AboutText>
        <EducationSection/>
        <AboutText>
          <h3>Self-Guided Education</h3>
          <p>
            I've also learned a lot on my own. I've learned how to use a variety of programming languages, tools, and
            technologies. I've also learned how to use a variety of software development methodologies and practices.<br/><br/>
            Some topics I've learned were:
          </p>
        </AboutText>
        <SkillsSection/>
      </Section>
    </Bubble>
  );
};

export default AboutSection;

const Section = styled.section`
  padding: 2rem;

  h2 {color: red;}
`;

const AboutText = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f7f;
    font-family: 'Courier New', monospace;
    flex-direction: column; /* Makes the content stack vertically */
    text-shadow: 1px 1px 1px #000000, 2px 2px 2px #000000, 3px 3px 3px #000000, 4px 4px 4px #000000;
`;