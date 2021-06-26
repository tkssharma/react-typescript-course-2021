import * as React from "react";
import { questions } from "./questions";

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [hidden, toggleHidden] = React.useState<boolean>(true);

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className="blurred">{answer}</span>
      </p>
      <footer>
        <button>Toggle Answer</button>
      </footer>
    </article>
  );
};

const Application = () => {
  return (
    <main>
      {questions.map((q: any) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default Application;

/*
const Question = ({ question, answer }: QuestionProps) => {
  const [hidden, toggleHidden] = useState(true);

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className="blurred">{answer}</span> 
        <span className={`${hidden ? "blurred" : "visible"}`}>{answer}</span>
      </p>
      <footer>
        <button>Toggle Answer</button>
        <button onClick={() => toggleHidden(!hidden) }>
          Toggle Answer
        </button>
      </footer>
    </article>
  );
};
*/
