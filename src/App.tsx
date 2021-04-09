import React, { useState } from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Sidebar, HamburgerButton } from 'src/components';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <BrowserRouter basename="/portfolio">
      <div className="app-container">
        <div className="app-mobile-menu">
          <HamburgerButton setShowSidebar={setShowSidebar} />
          {showSidebar && <Sidebar />}
        </div>

        <main className="app-main">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
