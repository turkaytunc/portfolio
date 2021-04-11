import React from 'react';
import './project.scss';

const Project = ({ content }: { content: string }) => {
  return <div className="project-card">{content}</div>;
};

export default Project;
