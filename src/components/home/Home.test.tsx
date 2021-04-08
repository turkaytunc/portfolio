import { screen, render } from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe('<Home />', () => {
  it('should render without crashing', () => {
    render(<Home />);
  });
});
