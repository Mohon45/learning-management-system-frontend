import React from "react";
import "./McqFormet.css";
import Quiz from "./McqFormet/contant/Quiz";
import { QuizProvider } from "./contexts/quiz";

const McqFormet = () => {
  return (
    <div>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
};

export default McqFormet;
