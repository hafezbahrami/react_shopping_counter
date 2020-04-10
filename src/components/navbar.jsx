// iirc TabTab
import React, { Component } from "react";
// In the render we simply copy the mark-up we borrowed from bootstrap

// cc Tab
class NabBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCountersGreatThan0}
          </span>
        </a>
      </nav>
    );
  }
}

export default NabBar;
