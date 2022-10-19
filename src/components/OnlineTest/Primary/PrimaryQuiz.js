import React from "react";
import { useParams } from "react-router-dom";

const PrimaryQuiz = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h1>Primary Quiz {id}</h1>
    </div>
  );
};

export default PrimaryQuiz;
