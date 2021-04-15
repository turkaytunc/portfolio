import React from 'react';
import Project from './project/Project';
import './projects.scss';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-row">
        <Project
          title="Pelp"
          imageSource="pelp.png"
          techs={['Docker', 'TravisCI', 'Reactjs', 'Jest', 'PostgreSql', 'Typescript', 'Heroku', 'Nodejs']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/Racon"
          liveProjectLink="https://turkaytunc.itch.io/racon"
        />
        <Project
          title="E-Secim"
          imageSource="e-secim.png"
          techs={['TravisCI', 'Reactjs', 'Jest', 'Typescript', 'Sass']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/Racon"
          liveProjectLink="https://turkaytunc.itch.io/racon"
        />
        <Project
          title="Mein Shop"
          imageSource="mein-shop.png"
          techs={['Reactjs', 'Jest', 'Javascript', 'Redux']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/Racon"
          liveProjectLink="https://turkaytunc.itch.io/racon"
        />
        <Project
          title="Redux-like"
          imageSource="redux-like.png"
          techs={['Reactjs', 'Typescript']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/Racon"
          liveProjectLink="https://turkaytunc.itch.io/racon"
        />
        <Project
          title="Wapp"
          imageSource="weather-app.png"
          techs={['Redux', 'Reactjs', 'Javascriptscript']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/Racon"
          liveProjectLink="https://turkaytunc.itch.io/racon"
        />
        {/* fix above  links */}
        <Project
          title="Markdown Previewer"
          imageSource="md-prev.png"
          techs={['Sass', 'Regex', 'Reactjs', 'TravisCI', 'Jest']}
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
          title="Random Quote Machine"
          imageSource="random-quote-machine.png"
          techs={['Sass', 'Jest', 'Reactjs', 'TravisCI', 'Coveralls']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/random-quote-machine"
          liveProjectLink="https://turkaytunc.github.io/random-quote-machine/"
        />

        <Project
          title="Restful API"
          imageSource="rest.jpg"
          techs={['MongoDB', 'Mongoose', 'Nodejs']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/rest-api-practice"
        />

        <Project
          title="First Person Character Controller"
          imageSource="fps-controller.png"
          techs={['C#', 'Unity']}
          content="this is a content"
          githubLink="https://github.com/turkaytunc/3D-character-controller"
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
