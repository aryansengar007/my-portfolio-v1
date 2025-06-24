import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Aryan Sengar</div>
    <div className="nav-links">
      <Link to="/">Home</Link> |
      <Link to="/about">About Me</Link> |
      <Link to="/projects">Projects</Link> |
      <Link to="/skills">Skills</Link> |
      <Link to="/Education">Education</Link> |
      <Link to="/contact">Contact</Link> 
    </div>
  </nav>
);

export default Navbar;