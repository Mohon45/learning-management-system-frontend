import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../McqFormet/McqFormet.css";
import { QuizProvider } from "../McqFormet/contexts/quiz";
import LoadingOverlay from "../../../Shared/LoadingOverlay/LoadingOverlay";
import Loader from "../../../Shared/Loader/Loader";

const PrimaryQuiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { token } = userInfo;

  useEffect(() => {
    axios
      .get(`https://e-tutors.onrender.com/api/v1/etutors/primary/quiz/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
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

export default PrimaryQuiz;
