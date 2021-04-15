import React from 'react';
import './project.scss';

type ProjectProp = {
  imageSource: string;
  title: string;
  techs: string[];
  githubLink: string;
  liveProjectLink?: string;
  zIndex?: number;
};

const Project = ({ zIndex, imageSource, githubLink, techs, title, liveProjectLink }: ProjectProp) => {
  return (
    <div className="project-card" style={{ zIndex: zIndex! }}>
      <header>{title}</header>

      <div className="project-image-container max-h-36 max-w-36 rounded-md lg:max-h-60 lg:max-w-60 overflow-hidden">
        <img src={`${process.env.PUBLIC_URL}/images/${imageSource}`} alt="project" />
      </div>
      <div>
        {techs.map((item) => (
          <div key={Math.random()}>{item}</div>
        ))}
      </div>
      <div className="project-links-container">
        <div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            See code on Github
          </a>
        </div>
        <div>
          <a href={liveProjectLink} target="_blank" rel="noopener noreferrer">
            Go to live project
          </a>
        </div>
      </div>
    </div>
  );
};

Project.defaultProps = { liveProjectLink: '', zIndex: 0 };

export default Project;
