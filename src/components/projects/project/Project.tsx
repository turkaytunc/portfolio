import React from 'react';
import ProjectLinks from './project-links/ProjectLinks';
import ProjectTechs from './project-techs/ProjectTechs';
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
      <header className="h-1/6 text-md md:text-2xl mb-5">{title}</header>
      <div className="h-2/6 project-image-container min-h-40 min-w-40 max-h-40 max-w-40 rounded-md overflow-hidden mb-5">
        <img className="opacity-90" src={`${process.env.PUBLIC_URL}/images/${imageSource}`} alt="project" />
      </div>
      <ProjectTechs techs={techs} />
      <ProjectLinks githubLink={githubLink} liveProjectLink={liveProjectLink} />
    </div>
  );
};

Project.defaultProps = { liveProjectLink: '', zIndex: 0 };

export default Project;
