import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { QuizProvider } from "../McqFormet/contexts/quiz";

const HighSchoolQuiz = () => {
  const [quizData, setQuizData] = useState(null);
  const { id } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { token } = userInfo;

  useEffect(() => {
    axios
      .get(
        `https://e-tutors.onrender.com/api/v1/etutors/high-school/quiz/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setQuizData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, token]);
  return (
    <div className="container">
      {quizData !== null ? (
        <>
          <QuizProvider quizData={quizData} />
        </>
      ) : null}
    </div>
  );
};

export default HighSchoolQuiz;
