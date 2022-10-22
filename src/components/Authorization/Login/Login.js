import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import wave from "../../../Assets/img/wave.png";
import bg from "../../../Assets/img/bg.svg";
import avater from "../../../Assets/img/avatar.svg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import LoadingOverlay from "../../../Shared/LoadingOverlay/LoadingOverlay";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    setLoading(true);
    axios
      .post("https://e-tutors.onrender.com/api/v1/etutors/user/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify({ ...res.data.data }));
        navigate(`/profile/${res.data.data.user._id}`);
        toast.success("User Successfully Registered!");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error("Something Went Wrong! try again letter!");
      });
  };

  return (
    <LoadingOverlay active={loading}>
      <div className="authorize">
        <img className="wave" src={wave} alt="wave" />
        <div className="auth-container">
          <div className="img">
            <img src={bg} alt="" />
          </div>
          <div className="login-content">
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="auth-form"
            >
              <img src={avater} alt="" />
              <h2 className="title">Welcome </h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="div">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="input"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    className="input"
                    placeholder="Password"
                  />
                </div>
              </div>
              <p className="show-hind-text text-start">
                Password must be a number,capital latter, small latter and
                symbol
              </p>
              <Link className="authorization-redirect" to="/register">
                New User? Please Register
              </Link>
              <button type="submit" className="btn-auth">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Login;
