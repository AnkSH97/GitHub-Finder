import React from "react";
import { link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fa fa-github"></i>
        GitHub Finder
      </h1>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/about">About</link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
