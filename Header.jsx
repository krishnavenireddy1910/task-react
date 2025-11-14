import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h2>☕ Starbucks Coffee Explorer</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/service">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
