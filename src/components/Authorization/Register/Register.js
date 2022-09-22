import React from "react";
import { Link } from "react-router-dom";
import wave from "../../../Assets/img/wave.png";
import bg from "../../../Assets/img/bg.svg";
import avater from "../../../Assets/img/avatar.svg";

const Register = () => {
  return (
    <div className="authorize">
      <img className="wave" src={wave} alt="" />
      <div className="auth-container">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <div className="login-content">
          <form className="auth-form">
            <img src={avater} alt="avater" />
            <div className="input-div one">
              <div className="i">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="div">
                <input type="text" className="input" placeholder="Name" />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="div">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Designation</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="div">
                <input type="email" className="input" placeholder="Email" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
            </div>
            <Link className="authorization-redirect" to="/login">
              Already Registered? Please Logins
            </Link>
            <input type="submit" className="btn-auth" value="Registration" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
