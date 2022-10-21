import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../McqFormet/McqFormet.css";
import { QuizProvider } from "../McqFormet/contexts/quiz";

const PrimaryQuiz = () => {
  const [quizData, setQuizData] = useState(null);
  const { id } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { token } = userInfo;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/etutors/primary/quiz/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setQuizData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, token]);
  console.log(quizData);

  return (
    <div className="container">
      <h1>Primary Quiz {id}</h1>
      {quizData !== null ? (
        <>
          <QuizProvider quizData={quizData} />
        </>
      ) : null}
    </div>
  );
};

export default PrimaryQuiz;
