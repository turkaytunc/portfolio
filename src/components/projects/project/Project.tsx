import React from 'react';
import './project.scss';

const Project = ({ content }: { content: string }) => {
  return (
    <div className="project-card">
      <header>Project Name</header>
      {content}
      <div className="project-image-container">image</div>
      <div>Tech Used</div>
      <div>github and live project</div>
    </div>
  );
};

export default Project;
