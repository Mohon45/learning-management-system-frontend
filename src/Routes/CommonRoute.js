import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Authorization/Login/Login";
import Register from "../components/Authorization/Register/Register";
import RequireAuth from "../components/Authorization/RequireAuth/RequireAuth";
import Home from "../components/Home/Home/Home";
import HomeDashBoard from "../components/Home/Index";
import FindTeachersDashBoard from "../components/FindTeachers/Index";
import OnlineTestDashBoard from "../components/OnlineTest/Index";
import NotFound from "../components/NotFound/NotFound";
import UserProfile from "../components/UserProfile/UserProfile";
import Notes from "../components/Notes/Notes";
import WorkSheet from "../components/WorkSheet/WorkSheet";
import UploadNotes from "../components/Notes/UploadNotes";
import TeacherMessage from "../components/TeacherMessage/TeacherMessage";

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
        <Route
          path="/find-teachers/level*"
          element={<FindTeachersDashBoard />}
        />
        <Route path="/online-test/level*" element={<OnlineTestDashBoard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/upload-notes" element={<UploadNotes />} />
        <Route path="/teacher/message" element={<TeacherMessage />} />
        <Route path="/worksheet" element={<WorkSheet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default CommonRoute;
