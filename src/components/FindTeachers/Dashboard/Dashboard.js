import React from "react";
import TeacherSearchAndShow from "../TeacherSearchAndShow/TeacherSearchAndShow";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bold my-3">
        Find a Teacher for Specific Subject
      </h1>
      <TeacherSearchAndShow />
    </div>
  );
};

export default Dashboard;
