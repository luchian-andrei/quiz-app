import { useEffect, useState } from "react";
import quizItems from "./questions/database";
import { Alert } from "react-bootstrap";

export default function QuestionPage({ handlePage, handleScore, userName }) {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [checkMode, setCheckMode] = useState(true);
  const [score, setScore] = useState(0);
  const [empty, setEmpty] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const correctAnswer = [0, 0, 1, 2, 2];

  function checkAnswer() {
    if (selectedAnswer === correctAnswer[index]) {
      setScore(score + 1);
    } else {
      setScore(score);
    }
  }

  useEffect(() => {
    if (selectedAnswer === -1) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [selectedAnswer]);

  return (
    <div className="QuestionPage">
      <div className="question-header">
        {showAlert ? (
          <Alert
            style={{
              backgroundColor: "#edae85",
              color: "#102136",
              fontWeight: "bold",
            }}
            className="alert"
            variant="warning"
          >
            {" "}
            Please select an answer, {userName}{" "}
          </Alert>
        ) : null}
        <h2>Question #{quizItems[index].id} </h2>
        <h3>{quizItems[index].question} </h3>
      </div>
      <div className="question-answers">
        {quizItems[index].answers.map((answer, ind) => (
          <p
            key={ind}
            onClick={() => setSelectedAnswer(ind)}
            className={ind === selectedAnswer ? "selected " : "unselected"}
          >
            {answer}{" "}
          </p>
        ))}
      </div>

      {checkMode ? (
        <div className="check-mode-buttons">
          {index <= 4 && !empty ? (
            <button
              className="CheckAnswer-button"
              onClick={() => [
                setCheckMode(false),
                checkAnswer(),
                setShowAlert(false),
              ]}
            >
              Check answer
            </button>
          ) : (
            <button
              className="CheckAnswer-button"
              onClick={() => setShowAlert(true)}
            >
              Check answer
            </button>
          )}
        </div>
      ) : (
        <div className="uncheck-mode-buttons">
          {index < 4 && (
            <button
              className="Next-button"
              onClick={() => [
                setIndex(index + 1),
                setCheckMode(true),
                setSelectedAnswer(-1),
              ]}
            >
              Next
            </button>
          )}
          {index >= 4 && (
            <button
              className="Endquiz-button"
              onClick={() => [
                handlePage("endPage"),
                checkAnswer(),
                handleScore(score),
              ]}
            >
              End quiz
            </button>
          )}
        </div>
      )}

      <div className="question-buttons"></div>
    </div>
  );
}
