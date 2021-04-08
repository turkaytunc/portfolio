import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';

describe('<App />', () => {
  it('should find hello text', async () => {
    const history = createBrowserHistory();
    history.push('/portfolio/');
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const linkElement = await screen.findByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
  });
});
