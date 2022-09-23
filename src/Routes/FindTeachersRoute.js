import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/FindTeachers/Dashboard/Dashboard";
import TeachersDetails from "../components/FindTeachers/TeacherSearchAndShow/TeachersDetails";
import NotFound from "../components/NotFound/NotFound";

const FindTeachersRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="teacher-details/:id" element={<TeachersDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default FindTeachersRoute;
