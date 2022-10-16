import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Authorization/Login/Login";
import Register from "../components/Authorization/Register/Register";
import RequireAuth from "../components/Authorization/RequireAuth/RequireAuth";
import Home from "../components/Home/Home/Home";
import HomeDashBoard from "../components/Home/Index";
import FindTeachersDashBoard from "../components/FindTeachers/Index";
import NotFound from "../components/NotFound/NotFound";
import UserProfile from "../components/UserProfile/UserProfile";
import OnlineTest from "../components/OnlineTest/OnlineTest";
import Notes from "../components/Notes/Notes";
import WorkSheet from "../components/WorkSheet/WorkSheet";

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
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/find-teachers/*" element={<FindTeachersDashBoard />} />
        <Route path="/online-test" element={<OnlineTest />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/worksheet" element={<WorkSheet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default CommonRoute;
