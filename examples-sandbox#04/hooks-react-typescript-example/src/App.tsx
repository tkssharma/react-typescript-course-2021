import * as React from "react";
import { questions, QuestionType } from "./questions";

type QuestionProps = {
  question: string;
  answer: string;
};
const Question = ({ question, answer }: QuestionProps) => {
  const [hidden, setHidden] = React.useState<boolean>(true);
  return (
    <div onClick={() => setHidden(!hidden)}>
      {question}
      {answer}
    </div>
  );
};
const Application = () => {
  return (
    <main>
      {questions.map((q: QuestionType) => {
        return <Question question={q.question} answer={q.answer} key={q.id} />;
      })}
    </main>
  );
};
export default Application;
