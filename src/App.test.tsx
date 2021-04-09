import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
    const linkElement = await screen.findByText(/footer/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should fire hamburger button click event and find sidebar menu on dom', async () => {
    const history = createBrowserHistory();
    history.push('/portfolio/');
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByText('Home')).toBeTruthy();
  });
});
