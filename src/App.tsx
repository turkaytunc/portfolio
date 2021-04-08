import React from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      hello
      <nav>navigation</nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <footer>footer</footer>
    </BrowserRouter>
  );
}

export default App;
