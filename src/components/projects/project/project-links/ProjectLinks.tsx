import React from 'react';
import './project-links.scss';

const ProjectLinks = ({ githubLink, liveProjectLink }: { githubLink: string; liveProjectLink: string | undefined }) => {
  return (
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
  );
};

export default ProjectLinks;
