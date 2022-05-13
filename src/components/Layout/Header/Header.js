import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return(
      <header>
        <h2>Header</h2>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </header>
    );
  }
}
export default Header;