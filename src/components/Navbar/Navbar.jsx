import React from "react";
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <div className="nav">
      <div>Logo</div>
      <div>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/faq">FAQ</Link> */}
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

export default Navbar;
