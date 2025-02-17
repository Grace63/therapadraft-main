import React from "react";

const Navbar = () => (
  <nav className="absolute top-4 right-6 flex gap-3 z-50">
    <a href="#" className="nav-btn">home</a>
    <a href="#" className="nav-btn">faqs</a>
    <a href="#" className="nav-btn">about</a>
    <a href="signup.html" className="nav-btn primary">get started</a>
  </nav>
);
export default Navbar;