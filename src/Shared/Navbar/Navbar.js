import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/img/E-tutors-log.png";
import logOutNotify from "../LogOutAlert/LogOutAlert";
import avater from "../../Assets/img/avatar.svg";
import axios from "axios";

const Navbar = () => {
  const [userdata, setUserdata] = useState({});
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/etutors/user/${userInfo.user._id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUserdata(res.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  let imageUrl = "";
  if (userdata.image) {
    imageUrl = userdata.image;
  } else {
    imageUrl = avater;
  }

  const LogOutHandler = () => {
    logOutNotify(logOut);
  };

  const logOut = () => {
    if (userInfo.user) {
      localStorage.removeItem("userInfo");
      navigate("/login", { replace: true });
    }
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand text-white" href="/home">
              <img style={{ height: "70px" }} src={logo} alt="" />
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/find-teachers/level">
                  Find Teachers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/online-test/level">
                  Online Test
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/notes">
                  Notes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/worksheet">
                  WorkSheet
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
                    src={imageUrl}
                    width="60"
                    height="60"
                    className="rounded-circle border border-4 "
                    alt="avater"
                  />
                </span>

                <ul className="dropdown-menu profile-icon-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/profile/${userInfo.user._id}`}
                    >
                      <span className="me-2">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={LogOutHandler}
                      className="dropdown-item log-out-custom"
                    >
                      <span className="me-2">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </span>
                      Log out
                    </div>
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
