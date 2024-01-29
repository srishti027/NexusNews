import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#" title="Home" style={{ color: "white" }}>
            NexusNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" title="Home" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Business" title="Business" style={{ color: "white" }}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment" title="Entertainment" style={{ color: "white" }}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/General" title="General" style={{ color: "white" }}>
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health" title="Health" style={{ color: "white" }}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science" title="Science" style={{ color: "white" }}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports" title="Sports" style={{ color: "white" }}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology" title="Technology" style={{ color: "white" }}>
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
