import { screen, render } from '@testing-library/react';
import Project from './Project';

const mockData = {
  title: 'E-Secim',
  imageSource: 'e-secim.png',
  techs: ['TravisCI', 'Reactjs', 'Jest', 'Typescript', 'Sass'],
  githubLink: 'https://github.com/turkaytunc/e-secim',
  liveProjectLink: 'https://turkaytunc.github.io/e-secim/',
};

describe('<Project />', () => {
  it('should render without crash', () => {
    render(
      <Project
        title={mockData.title}
        imageSource={mockData.imageSource}
        techs={mockData.techs}
        githubLink={mockData.githubLink}
        liveProjectLink={mockData.liveProjectLink}
      />
    );
  });
});
