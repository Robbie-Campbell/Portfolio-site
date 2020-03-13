import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Burger from "./burger-icon.png";

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <nav id="navbar">
          <img
            id="burger"
            src={Burger}
            width="80px"
            height="80px"
            onClick={this.handleClick}
          ></img>
          <p className="titles">
            <Link exact to="/">
              Home
            </Link>
            |<Link to="/About">About</Link>|<Link to="/Projects">Projects</Link>
          </p>
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
    );
  }
}
export default Nav;
