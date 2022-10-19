import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import wave from "../../../Assets/img/wave.png";
import bg from "../../../Assets/img/bg.svg";
import avater from "../../../Assets/img/avatar.svg";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingOverlay from "../../../Shared/LoadingOverlay/LoadingOverlay";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/etutors/user/register", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setLoading(false);
        navigate("/login");
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
        <img className="wave" src={wave} alt="" />
        <div className="auth-container">
          <div className="img">
            <img src={bg} alt="" />
          </div>
          <div className="login-content">
            <form
              className="auth-form"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <img src={avater} alt="avater" />
              <div className="input-div one">
                <div className="i">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="div">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="input"
                    placeholder="Name"
                  />
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
                    {...register("designation", { required: true })}
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
              <Link className="authorization-redirect" to="/login">
                Already Registered? Please Logins
              </Link>
              <button type="submit" className="btn-auth">
                Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Register;
