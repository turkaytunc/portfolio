import React from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from 'src/components';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <nav>navigation</nav>
      <main className="app-main">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <footer>footer</footer>
    </BrowserRouter>
  );
}

export default App;
