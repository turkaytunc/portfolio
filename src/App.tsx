import React, { useState } from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Sidebar, HamburgerButton, DesktopMenu, Projects } from 'src/components';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <BrowserRouter basename="/portfolio">
      <div className="app-container">
        <div className="app-mobile-menu">
          <HamburgerButton setShowSidebar={setShowSidebar} />
          <Sidebar showSidebar={showSidebar} />
        </div>

        <div className="app-desktop-menu">
          <DesktopMenu />
        </div>

        <main className="app-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route
              exact
              path="/articles"
              component={() => (
                <div style={{ paddingBottom: '100vh' }} data-testid="articles-container">
                  Articles
                </div>
              )}
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
