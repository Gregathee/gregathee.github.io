import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type ProjectPopupProps = {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  technologies: string; // New prop for technologies
  description: string;
  children?: React.ReactNode;
};

const TitleContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: white; // Ensures the title blocks content behind it
    z-index: 10; // Higher z-index to ensure it's above other content
    padding: 10px 0; // Give some vertical space for better appearance
    display: flex;
    justify-content: space-between; // Space for title and close button
    align-items: center; // Vertically center the items
`;

const TitleStyled = styled.h2`
  color: red;
  margin: 0; // Remove any default margin
`;

const ContentContainer = styled.div`
  
  overflow-y: auto;
`;

const TechnologiesStyled = styled.p`
    color: #666;
    margin-bottom: 10px;
    font-style: italic;
`;

const CloseButton = styled.button`
  position: static; // Reset from absolute to fit in the flex container
  margin-right: 10px; // Space from the right edge
`;

const ProjectPopup: React.FC<ProjectPopupProps> = ({ isOpen, handleClose, title, technologies, description, children }) => {
  if (!isOpen) {
    return null;
  }

  const detailsStyles: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
  };

  const popupStyles: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: 'auto', // This will make the width fit the content
    height: 'auto', // This will make the height fit the content
    maxHeight: '90vh', // Still keep a max height for very long content
    maxWidth: '90%', // To ensure it doesn't get too wide on large screens
    overflowY: 'auto', // In case content exceeds maxHeight
    position: 'relative',
  };

  return ReactDOM.createPortal(
    <div style={detailsStyles} onClick={handleClose}>
      <div style={{...popupStyles, display: 'flex', flexDirection: 'column'}} onClick={(e) => e.stopPropagation()}>
        <TitleContainer>
          <TitleStyled>{title}</TitleStyled>
          <CloseButton onClick={handleClose}>Close</CloseButton>
        </TitleContainer>
        <TechnologiesStyled>Technologies: {technologies}</TechnologiesStyled>
        <ContentContainer>
          <p>{description}</p>
          {children}
        </ContentContainer>
      </div>
    </div>,
    document.body
  );
};

export default ProjectPopup;