import React from "react";
import "./OnlineTest.css";
import Layout from "../../HOC/Layout";
import Quiz from "./contant/Quiz";
import { QuizProvider } from "./contexts/quiz";

const OnlineTest = () => {
  return (
    <Layout>
      <div className="container">
        <QuizProvider>
          <Quiz />
        </QuizProvider>
      </div>
    </Layout>
  );
};

export default OnlineTest;
