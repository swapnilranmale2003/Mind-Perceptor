import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link  to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

export default Navbar;
