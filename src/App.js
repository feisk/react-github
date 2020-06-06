import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AlertState } from "./context";
import { Home, About, Profile } from "./pages";
import { Navbar, Alert } from "./components";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />

        <main className="container pt-4">
          <Alert />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />
          </Switch>
        </main>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
