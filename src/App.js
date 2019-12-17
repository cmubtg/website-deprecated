import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Alumni from "./Alumni";

export default function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/alumni" component={Alumni} />
      </Switch>
    </HashRouter>
  );
}