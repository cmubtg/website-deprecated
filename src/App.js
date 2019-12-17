import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Alumni from "./Alumni";

export default function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
      <Route path="/alumni" component={Alumni} />
    </Router>
  );
}
