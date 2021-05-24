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
<script>
  window.chat24_token = "4266aedc7ca396044025d36f0f2f43a3";
  window.chat24_url = "https://livechatv2.chat2desk.com";
  window.chat24_socket_url ="wss://livechatv2.chat2desk.com/widget_ws_new";
  window.chat24_show_new_wysiwyg = "true";
  window.chat24_static_files_domain = "https://storage.chat2desk.com/";
  window.lang = "ru";
  window.fetch("".concat(window.chat24_url, "/packs/manifest.json?nocache=").concat(new Date().getTime())).then(function (res) {
    return res.json();
  }).then(function (data) {
    var chat24 = document.createElement("script");
    chat24.type = "text/javascript";
    chat24.async = true;
    chat24.src = "".concat(window.chat24_url).concat(data["application.js"]);
    document.body.appendChild(chat24);
  });
</script>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export { App };
