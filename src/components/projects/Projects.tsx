import React from 'react';
import Project from './project/Project';
import './projects.scss';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-row">
        <Project
          title="Markdown Previewer"
          imageSource="md-prev.png"
          techs={['Sass', 'Regex', 'Reactjs', 'TravisCI', 'Bash', 'Jest']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/md-prev"
          liveProjectLink="https://turkaytunc.github.io/md-prev/"
        />
        <Project
          title="Study Timer"
          imageSource="study-timer.png"
          techs={['Sass', 'Jest', 'Reactjs', 'TravisCI', 'Codecov']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/study-timer"
          liveProjectLink="https://turkaytunc.github.io/study-timer/"
        />
        <Project
          title="Chef"
          imageSource="food.jpg"
          techs={['Reactjs', 'Axios', 'Sass']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/recipe-app"
          liveProjectLink="https://turkaytunc.github.io/recipe-app/"
        />
        <Project
          title="Random Quote Machine"
          imageSource="random-quote-machine.png"
          techs={['Sass', 'Jest', 'Reactjs', 'TravisCI', 'Coveralls', 'fetchAPI']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/random-quote-machine"
          liveProjectLink="https://turkaytunc.github.io/random-quote-machine/"
        />

        <Project
          title="Digital Clock"
          imageSource="digital-clock.png"
          techs={['Sass', 'Jest', 'TravisCI', 'Coveralls', 'fetchAPI']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/digital-clock"
          liveProjectLink="https://turkaytunc.github.io/digital-clock/"
        />

        <Project
          title="Restful API"
          imageSource="rest.jpg"
          techs={['MongoDB', 'Mongoose', 'Nodejs']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/rest-api-practice"
        />
        <Project
          title="Random Color Generator"
          imageSource="random-color-generator.png"
          techs={['Reactjs', 'Css']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/random-color-generator"
          liveProjectLink="https://turkaytunc.github.io/random-color-generator/"
        />
        <Project
          title="First Person Character Controller"
          imageSource="fps-controller.png"
          techs={['C#', 'Unity', 'GLSL']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/3D-character-controller"
        />

        <Project
          title="Password Generator"
          imageSource="password-generator.png"
          techs={['Reactjs', 'Jest', 'Sass', 'Hooks']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/pass-gen"
          liveProjectLink="https://turkaytunc.github.io/pass-gen/"
        />

        <Project
          title="Space Shooter"
          imageSource="space-shooter.png"
          techs={['GIMP', 'Aseprite', 'Unity', 'C#', 'GLSL']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/Racon"
          liveProjectLink="https://turkaytunc.itch.io/racon"
        />
      </div>
    </div>
  );
};

export default Projects;
