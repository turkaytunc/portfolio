import React from 'react';

const ProjectTechs = ({ techs }: { techs: string[] }) => {
  return (
    <div>
      {techs.map((item) => (
        <div key={Math.random()}>{item}</div>
      ))}
    </div>
  );
};

export default ProjectTechs;
