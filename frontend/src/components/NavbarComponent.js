// components/NavbarComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">My App</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavbarComponent;