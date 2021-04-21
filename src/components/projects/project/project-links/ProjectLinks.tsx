import React from 'react';
import './project-links.scss';

const ProjectLinks = ({ githubLink, liveProjectLink }: { githubLink: string; liveProjectLink: string | undefined }) => {
  return (
    <div className="h-1/6 project-links-container">
      <div className="justify-self-start w-1/2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          See code on Github
        </a>
      </div>
      {liveProjectLink && (
        <div className="ml-2">
          <a href={liveProjectLink} target="_blank" rel="noopener noreferrer">
            Go to live project
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectLinks;
