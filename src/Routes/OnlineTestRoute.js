import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Dashboard from "../components/OnlineTest/Dashboard/Dashboard";
import HighSchool from "../components/OnlineTest/HighSchool/HighSchool";
import HighSchoolQuiz from "../components/OnlineTest/HighSchool/HighSchoolQuiz";
import Intermediate from "../components/OnlineTest/Intermediate/Intermediate";
import IntermediateQuiz from "../components/OnlineTest/Intermediate/IntermediateQuiz";
import Primary from "../components/OnlineTest/Primary/Primary";
import PrimaryQuiz from "../components/OnlineTest/Primary/PrimaryQuiz";
import University from "../components/OnlineTest/University/University";
import UniversityQuiz from "../components/OnlineTest/University/UniversityQuiz";

const OnlineTestRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="primary" element={<Primary />} />
        <Route path="high-school" element={<HighSchool />} />
        <Route path="intermediate" element={<Intermediate />} />
        <Route path="university" element={<University />} />
        <Route path="primary/quiz/:id" element={<PrimaryQuiz />} />
        <Route path="high-school/quiz/:id" element={<HighSchoolQuiz />} />
        <Route path="intermediate/quiz/:id" element={<IntermediateQuiz />} />
        <Route path="university/quiz/:id" element={<UniversityQuiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default OnlineTestRoute;
