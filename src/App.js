import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import Alumni from "./Alumni";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/alumni">
            <Alumni />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}