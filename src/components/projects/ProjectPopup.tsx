import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type ProjectPopupProps = {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  technologies: string; 
  description: string;
  children?: React.ReactNode;
};

const TitleContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: white; 
    z-index: 10; 
    padding: 10px 0; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleStyled = styled.h2`
  color: red;
  margin: 0; 
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
    width: 'auto', 
    height: 'auto', 
    maxHeight: '90vh', 
    maxWidth: '90%', 
    overflowY: 'auto', 
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