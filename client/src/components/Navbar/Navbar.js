import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
