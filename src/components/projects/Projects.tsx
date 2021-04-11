import React from 'react';
import Project from './project/Project';
import './projects.scss';

const Projects = () => {
  const arr = [];

  for (let i = 0; i < 10; i += 1) {
    arr.push(<Project key={Math.random()} content="random content" />);
  }

  return (
    <section className="projects-container">
      <div className="project-container">
        {arr.map((item, i) => {
          if (i % 2 === 0) return item;
          return null;
        })}
      </div>
      <div className="project-container">
        {arr.map((item, i) => {
          if (i % 2 !== 0) return item;
          return null;
        })}
      </div>
    </section>
  );
};

export default Projects;
