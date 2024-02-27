import { useEffect, useState } from "react";

export default function StartPage({ handlePage, handleName, userName }) {
  const [input, setInput] = useState("");
  const [quizIndex, setQuizIndex] = useState(0);
  const [registerMode, setRegisterMode] = useState(true);
  const [unableToContinue, setUnableToContinue] = useState();

  function checkInput() {
    if (input === "") {
      setUnableToContinue(true);
    } else {
      setUnableToContinue(false);
    }
  }

  useEffect(() => {
    checkInput();
  });

  return (
    <div className="StartPageWrapper">
      {registerMode && (
        <div className="startpage-header">
          <h1>We have the questions </h1>
          <h3>...and hopefully you have the answers</h3>
        </div>
      )}

      {registerMode ? (
        <div className="register-mode">
          <input
            type="text"
            placeholder="Enter your name to start"
            onChange={(e) => setInput(e.target.value)}
            required
          />
          {unableToContinue ? (
            <button
              disabled
              className="disabled-start-button"
              onClick={() => [handleName(input), setRegisterMode(false)]}
            >
              Register
            </button>
          ) : (
            <button onClick={() => [handleName(input), setRegisterMode(false)]}>
              Register
            </button>
          )}
        </div>
      ) : (
        <div className="start-quiz-mode">
          <h2>
            Are you ready,
            <span>{userName}</span> ?{" "}
          </h2>

          <button
            onClick={() => [
              setQuizIndex(quizIndex + 1),
              handlePage("questionPage"),
            ]}
          >
            {" "}
            Start quiz{" "}
          </button>
        </div>
      )}
    </div>
  );
}
