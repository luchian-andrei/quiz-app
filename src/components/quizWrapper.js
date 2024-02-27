import StartPage from "./startpage";
import QuestionPage from "./questionPage";
import EndPage from "./endpage";
import { useState } from "react";

export default function QuizWrapper() {
  const [page, setPage] = useState("startPage");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState();

  function handlePage(att) {
    setPage(att);
  }

  function handleName(name) {
    setUserName(name);
  }

  function handleScore(points) {
    setScore(points);
  }

  return (
    <div>
      {page === "startPage" && (
        <StartPage
          handlePage={handlePage}
          handleName={handleName}
          userName={userName}
        />
      )}
      {page === "questionPage" && (
        <QuestionPage
          handlePage={handlePage}
          handleScore={handleScore}
          userName={userName}
        />
      )}

      {page === "endPage" && (
        <EndPage handlePage={handlePage} userName={userName} score={score} />
      )}
    </div>
  );
}
