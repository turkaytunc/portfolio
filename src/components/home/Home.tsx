/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <section className="home-container" data-testid="home-container">
      <p className="max-w-5xl leading-relaxed text-lg md:text-2xl pt-12">
        Hi👋 stranger! I'm Türkay Tunç, a web developer living in Istanbul/Turkey.
      </p>
      <p className="max-w-5xl leading-loose text-lg md:text-2xl pt-5">
        I started working as a performance tester using built-in Unity profiler and C# language 5 years ago. For almost
        3 years, I refactored codes to increase projects' performance. At that time I also made games as an idividual
        developer from start to finish.
      </p>
      <p className="max-w-5xl leading-loose text-lg md:text-2xl pt-12">
        Then I decided to change my workspace to web development. I like to learn new technologies and continuously
        improve myself. My journey from game development to web development started as a frontend developer. I really
        liked web development so I decided to learn some backend and devops technologies too.
      </p>
      <p className="max-w-5xl leading-relaxed text-lg md:text-xl pt-12">
        My next goal is learning Golang wish me luck. &#128516;
      </p>
    </section>
  );
};

export default Home;
