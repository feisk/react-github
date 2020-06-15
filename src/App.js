import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AlertState, GithubState } from "./context";
import { Home, About, Profile } from "./pages";
import { Header, Alert } from "./components";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Header />

          <main className="container pt-4">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>

            <Alert />
          </main>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export { App };
