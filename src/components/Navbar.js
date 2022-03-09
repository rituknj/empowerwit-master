import React from "react";
import { Link } from "react-router-dom";
import empowerwitlogo from "./images/Artboard 1.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-none">
        <div className="container-fluid">
          <Link className="navbar-brand py-2" to="/">
            <img
              src={empowerwitlogo}
              alt="empowerwitlogo"
              srcSet=""
              className="empowerwitlogo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/aboutus"
              >
                About
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/ourteam"
              >
                Team
              </Link>
              <Link className="nav-link active" aria-current="page" to="/blogs">
                Blog
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contactus"
              >
                Contact
              </Link>
            </ul>
            <button className="apply"><a href="/applynow" className="applynow">Apply Now</a></button>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EmpowerWit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=" /navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who we are
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ourteam">
                      Our Team
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/blogs">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/contactus">
                    Contact
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}
