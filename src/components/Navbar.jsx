import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

export const Navbar = () => {
  return (
    <nav className="netflix-navbar navbar navbar-expand-lg">

      {/* LEFT SIDE */}
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand netflix-logo" to="/">
          NETFLIX
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav netflix-menu">

            <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">Shows</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixmovies">Movies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Teams">Teams</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/RouteComponent">RouteComponent</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};