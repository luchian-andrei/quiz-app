import { useEffect, useState } from "react";
import quizItems from "../database";

export default function QuestionTest() {
  const [randomNumber, setRandomNumber] = useState("");

  function randomQuiz(length) {
    setRandomNumber(Math.floor(Math.random() * length));
  }

  useEffect(() => {
    randomQuiz(quizItems.length);
  }, []);

  console.log(randomNumber);

  return (
    <div>
      <p>{quizItems[randomNumber].question} </p>
      {quizItems[randomNumber].answers.map((answer) => (
        <p>{answer} </p>
      ))}
    </div>
  );
}
