import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Home/App";

import registrationVideo from "./pages/registration/video";
import registrationCategory from "./pages/registration/category";

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/registration/video" component={registrationVideo} />
      <Route path="/registration/category" component={registrationCategory} />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
