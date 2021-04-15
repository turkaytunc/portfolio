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

const Project = ({ zIndex = 0, content, imageSource, githubLink, techs, title, liveProjectLink }: ProjectProp) => {
  return (
    <div className="project-card" style={{ zIndex: zIndex! }}>
      <header>Project Name</header>
      {content}
      <div className="project-image-container max-h-36 max-w-36 rounded-md lg:max-h-60 lg:max-w-60 overflow-hidden">
        <img src={`${process.env.PUBLIC_URL}/images/${imageSource}`} alt="project" />
      </div>
      <div>Tech Used</div>
      <div>github and live project</div>
    </div>
  );
};

Project.defaultProps = { liveProjectLink: '', zIndex: 0 };

export default Project;
