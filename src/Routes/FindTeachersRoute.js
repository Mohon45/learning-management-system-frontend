import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/FindTeachers/Dashboard/Dashboard";
import HighSchool from "../components/FindTeachers/HighSchool/HighSchool";
import Intermediate from "../components/FindTeachers/Intermediate/Intermediate";
import Primary from "../components/FindTeachers/Primary/Primary";
import TeachersDetails from "../components/FindTeachers/TeacherSearchAndShow/TeachersDetails";
import University from "../components/FindTeachers/University/University";
import NotFound from "../components/NotFound/NotFound";

const FindTeachersRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="primary" element={<Primary />} />
        <Route path="high-school" element={<HighSchool />} />
        <Route path="intermediate" element={<Intermediate />} />
        <Route path="university" element={<University />} />
        <Route path="teacher-details/:id" element={<TeachersDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default FindTeachersRoute;
