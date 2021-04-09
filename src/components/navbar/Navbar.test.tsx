import { screen, render } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('<Navbar/>', () => {
  it('should render without crashing', async () => {
    const history = createBrowserHistory();
    history.push('/');
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(await screen.findByText('Home')).toBeTruthy();
  });
});
