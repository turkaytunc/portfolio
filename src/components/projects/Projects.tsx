import React from 'react';
import projectsData from 'src/utils/projectsData.json';
import Project from './project/Project';
import './projects.scss';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-row" data-testid="projects-row">
        {projectsData.map((item) => (
          <Project
            key={Math.random()}
            title={item.title}
            imageSource={item.imageSource}
            techs={item.techs}
            githubLink={item.githubLink}
            liveProjectLink={item.liveProjectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
