import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => (
  <nav className="absolute top-4 right-6 flex gap-3 z-50">
    <a href="#" className="nav-btn">home</a>
    <a href="#" className="nav-btn">faqs</a>
    <a href="#" className="nav-btn">about</a>
    <Link
          to="/register"
          className="nav-btn primary"
        >
          get started
        </Link>
  </nav>
);
export default Navbar;