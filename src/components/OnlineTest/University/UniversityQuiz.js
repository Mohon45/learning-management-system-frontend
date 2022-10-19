import React from "react";
import { useParams } from "react-router-dom";

const UniversityQuiz = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h1>University Quiz {id}</h1>
    </div>
  );
};

export default UniversityQuiz;
