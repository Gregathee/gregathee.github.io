import React from 'react';
import styled from 'styled-components';
import Project from "./Project";
import {graphql, useStaticQuery} from "gatsby";
import Bubble from "../Bubble";
import ProjectA from "./ProjectA";

const ProjectsSection: React.FC = () => {
  const data = useStaticQuery(graphql` query { site { siteMetadata { bannerLogo } } } `);

  if (!data) return <div>Failed to load site metadata</div>;

  return (
    <Bubble maxWidth={"auto"}>
      <SectionStyled id={"projects"}>
        <h2>Games/Projects</h2>
        <ProjectsGrid>
          <Project thumbnail={data.site.siteMetadata.bannerLogo} thumbnailGif="/gifgif.gif" title="Test" tech="C++" description="Description of project">
            <ProjectA />
          </Project>
          <Project thumbnail={data.site.siteMetadata.bannerLogo} thumbnailGif="/gifgif.gif" title="Test 2" tech="C++" description="Another project">
          </Project>
        </ProjectsGrid>
      </SectionStyled>
    </Bubble>
  );
};

export default ProjectsSection;

export const SectionStyled = styled.section<{ center?: boolean }>`
    padding: 2rem;
    h2 {color: red;}
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;