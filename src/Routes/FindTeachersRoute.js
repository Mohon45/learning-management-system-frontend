import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/FindTeachers/Dashboard/Dashboard";
import NotFound from "../components/NotFound/NotFound";

const FindTeachersRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default FindTeachersRoute;
