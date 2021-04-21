import React from 'react';
import './project-techs.scss';

const ProjectTechs = ({ techs }: { techs: string[] }) => {
  return (
    <div className="h-1/6 project-techs-container">
      {techs.map((item) => (
        <div className="project-tech" key={Math.random()}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProjectTechs;
