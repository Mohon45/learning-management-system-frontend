import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { QuizProvider } from "../McqFormet/contexts/quiz";
import Loader from "../../../Shared/Loader/Loader";

const HighSchoolQuiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id, token]);
  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          {quizData !== null ? (
            <>
              <QuizProvider quizData={quizData} />
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default HighSchoolQuiz;
