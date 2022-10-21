import React, { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div className="row">
      <div className="col">
        <div className="question">{currentQuestion.question}</div>
        <div className="answers">
          {quizState.answers.map((answer, index) => (
            <Answer
              answerText={answer}
              currentAnswer={quizState.currentAnswer}
              correctAnswer={currentQuestion.correctAnswer}
              key={index}
              index={index}
              onSelectAnswer={(answerText) =>
                dispatch({ type: "SELECT_ANSWER", payload: answerText })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
