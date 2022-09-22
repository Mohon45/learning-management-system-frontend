import React from "react";
import { Link } from "react-router-dom";
import wave from "../../../Assets/img/wave.png";
import bg from "../../../Assets/img/bg.svg";
import avater from "../../../Assets/img/avatar.svg";

const Login = () => {
  return (
    <div className="authorize">
      <img className="wave" src={wave} alt="wave" />
      <div className="auth-container">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <div className="login-content">
          <form className="auth-form">
            <img src={avater} alt="" />
            <h2 className="title">Welcome </h2>
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
            <Link className="authorization-redirect" to="/register">
              New User? Please Register
            </Link>
            <input type="submit" className="btn-auth" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
