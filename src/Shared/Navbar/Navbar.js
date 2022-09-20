import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand text-white" href="/home">
              E-Tutors
            </a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
            </ul>

            <div className="ms-3">
              <div className="dropdown me-3">
                <span
                  className="dropdown-toggle dropdown-avater-img"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://i.ibb.co/zh64p5L/user-Avater.png"
                    width="60"
                    height="60"
                    className="rounded-circle border border-4 "
                    alt="avater"
                  />
                </span>

                <ul className="dropdown-menu profile-icon-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      <span className="me-2">
                        <i class="fa-solid fa-user"></i>
                      </span>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      // onClick={logout}
                      className="dropdown-item"
                      to="/login"
                    >
                      <span className="me-2">
                        <i class="fa-solid fa-right-from-bracket"></i>
                      </span>
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
