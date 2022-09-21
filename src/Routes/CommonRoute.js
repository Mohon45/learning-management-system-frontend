import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Authorization/Login/Login";
import Register from "../components/Authorization/Register/Register";
import RequireAuth from "../components/Authorization/RequireAuth/RequireAuth";
import Home from "../components/Home/Home/Home";
import HomeDashBoard from "../components/Home/Index";
import FindTeachersDashBoard from "../components/FindTeachers/Index";
import NotFound from "../components/NotFound/NotFound";

const CommonRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<HomeDashBoard />} />
        <Route path="/find-teachers/*" element={<FindTeachersDashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default CommonRoute;
