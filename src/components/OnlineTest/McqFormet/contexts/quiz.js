import axios from "axios";
import React, { createContext, useReducer, useEffect } from "react";
import { useState } from "react";
import Quiz from "../contant/Quiz";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const id = props.id;
  console.log(id);
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
        const questions = res.data.data;
        // setQuestions(res.data.data);
        // console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(questions);

  const initialState = {
    questions,
    currentQuestionIndex: 0,
    currentAnswer: "",
    answers: shuffleAnswers(questions[0]),
    showResults: false,
    correctAnswersCount: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_ANSWER": {
        const correctAnswersCount =
          action.payload ===
          state.questions[state.currentQuestionIndex].correctAnswer
            ? state.correctAnswersCount + 1
            : state.correctAnswersCount;
        return {
          ...state,
          currentAnswer: action.payload,
          correctAnswersCount,
        };
      }
      case "NEXT_QUESTION": {
        const showResults =
          state.currentQuestionIndex === state.questions.length - 1;
        const currentQuestionIndex = showResults
          ? state.currentQuestionIndex
          : state.currentQuestionIndex + 1;
        const answers = showResults
          ? []
          : shuffleAnswers(state.questions[currentQuestionIndex]);
        return {
          ...state,
          currentAnswer: "",
          showResults,
          currentQuestionIndex,
          answers,
        };
      }
      case "RESTART": {
        return initialState;
      }
      default:
        return state;
    }
  };

  const value = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={value}>
      <Quiz />
    </QuizContext.Provider>
  );
};
