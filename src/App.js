import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alumni from "./pages/Alumni";
import Team from "./pages/Team";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
      <Route path="/alumni" component={Alumni} />
      <Route path="/team" component={Team} />
      <Route path="/projects" component={Projects} />
    </Router>
  );
}
