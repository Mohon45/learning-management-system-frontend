import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Authorization/Login/Login";
import Register from "../components/Authorization/Register/Register";

const AuthorizationRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AuthorizationRoute;
