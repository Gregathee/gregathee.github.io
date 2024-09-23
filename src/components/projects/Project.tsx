import React, { useState } from 'react';
import ProjectPopup from './ProjectPopup';

type ProjectProps = {
  thumbnail: string;
  thumbnailGif: string;
  title: string;
  tech: string;
  description: string;
  children?: React.ReactNode;
};

const Project: React.FC<ProjectProps> = ({ thumbnail, thumbnailGif, title, tech, description, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEvents = (set: boolean) => () => setIsHovered(set);
  const handlePopup = (set: boolean) => () => setIsOpen(set);

  const projectStyles: React.CSSProperties = {
    width: '250px', 
    minHeight: '250px',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
  };

  const thumbnailStyles: React.CSSProperties = {
    width: '100%',
    height: '100px', 
    objectFit: 'cover',
    borderRadius: '5px',
  };

  return (
    <div style={projectStyles} onMouseEnter={handleMouseEvents(true)} onMouseLeave={handleMouseEvents(false)} onClick={handlePopup(true)}>
      <ProjectPopup
        isOpen={isOpen}
        handleClose={handlePopup(false)}
        title={title}
        technologies={tech}
        description={description}
      >
        {children}
      </ProjectPopup>
      <img src={isHovered ? thumbnailGif : thumbnail} alt={title} style={thumbnailStyles} />
      <h3 style={{ marginTop: '10px' }}>{title}</h3>
      <p style={{ color: '#666', marginBottom: '10px' }}>{tech}</p>
      <p style={{ color: '#444', flexGrow: 1 }}>{description}</p> {/* Allows description to fill available space */}
    </div>
  );
};

export default Project;