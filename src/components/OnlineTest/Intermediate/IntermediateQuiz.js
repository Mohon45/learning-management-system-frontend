import React from "react";
import { useParams } from "react-router-dom";

const IntermediateQuiz = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Intermediate Quiz {id}</h1>
    </div>
  );
};

export default IntermediateQuiz;
