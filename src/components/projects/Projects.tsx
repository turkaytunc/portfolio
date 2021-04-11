import React from 'react';
import Project from './project/Project';
import './projects.scss';

const Projects = () => {
  const arr = [];

  for (let i = 0; i < 10; i += 1) {
    arr.push(<Project content="random content" />);
  }

  return <section className="projects-container">{arr.map((item) => item)}</section>;
};

export default Projects;
