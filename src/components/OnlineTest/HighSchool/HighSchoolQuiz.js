import React from "react";
import { useParams } from "react-router-dom";

const HighSchoolQuiz = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h1>High School Quiz {id}</h1>
    </div>
  );
};

export default HighSchoolQuiz;
