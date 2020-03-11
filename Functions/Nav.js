import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Projects from './Projects';

export default function Nav() {
    return (
    <Router>
        <nav id="navbar">
            <p className="titles"><Link exact to="/">Home</Link>|
            <Link to="/About">About</Link>|
            <Link to="/Projects">Projects</Link></p>
            <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>

        </Switch>
        </nav>
    </Router>
    )
}
