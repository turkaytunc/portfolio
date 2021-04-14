import React from 'react';
import Project from './project/Project';
import './projects.scss';

const Projects = () => {
  const arr = [];

  for (let i = 0; i < 14; i += 1) {
    arr.push(<Project key={Math.random()} content={`random content ${i}`} />);
  }

  return (
    <section className="projects-container">
      <div className="project-container">
        {arr.map((item, i) => {
          if (i < arr.length / 4) return item;
          return null;
        })}
      </div>
      <div className="project-container">
        {arr.map((item, i) => {
          if (i >= arr.length / 4 && i < arr.length / 2) return item;
          return null;
        })}
      </div>
      <div className="project-container">
        {arr.map((item, i) => {
          if (i >= arr.length / 2 && i < arr.length / (4 / 3)) return item;
          return null;
        })}
      </div>
      <div className="project-container">
        {arr.map((item, i) => {
          if (i > arr.length / (4 / 3)) return item;
          return null;
        })}
      </div>
    </section>
  );
};

export default Projects;
