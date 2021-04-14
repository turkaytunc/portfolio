import React from 'react';
import './project.scss';

type ProjectProp = {
  content: string;
  imageSource: string;
  title: string;
  techs: string[];
  githubLink: string;
  liveProjectLink?: string;
  zIndex?: number;
};

const Project = ({ zIndex, content, imageSource, githubLink, techs, title, liveProjectLink }: ProjectProp) => {
  return (
    <div className="project-card">
      <header>Project Name</header>
      {content}
      <div className="project-image-container max-h-40 max-w-40 rounded-md overflow-hidden">
        <img src={`${process.env.PUBLIC_URL}/images/${imageSource}`} alt="project" />
      </div>
      <div>Tech Used</div>
      <div>github and live project</div>
    </div>
  );
};

Project.defaultProps = { liveProjectLink: '', zIndex: 0 };

export default Project;
