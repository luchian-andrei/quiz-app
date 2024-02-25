import quizItems from "../database";

export default function Question1() {
  return (
    <div className="quiz1">
      <p>{quizItems[0].question}</p>
      {quizItems[0].answers.map((answer) => (
        <p>{answer} </p>
      ))}
    </div>
  );
}
