import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  it('should render without crashing', async () => {
    const history = createBrowserHistory();
    render(
      <Router history={history}>
        <Sidebar />
      </Router>
    );
  });
});
