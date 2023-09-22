import React from 'react';
import {Link} from "react-router-dom";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        {/*<a className="navbar-brand" href="#">Restaurant</a>*/}
        <img src='cutlery.png' height="2%" width="5%" alt='Logo'/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active w3-padding-16" to="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link w3-padding-16" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link w3-padding-16" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link w3-padding-16" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link w3-padding-16" to="/service">Service</Link>
            </li>
            {/*
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle w3-padding-16"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Book a Table
              </Link>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
  */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;