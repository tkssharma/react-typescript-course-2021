export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "are you a super man",
    answer: "yes/no"
  },
  {
    id: 2,
    question: "What elective class did Thor take on Asgard?",
    answer: "Speaking Groot"
  },
  {
    id: 3,
    question: "Which is the first Inifity Stone that Thanos acquired?",
    answer: "The Power Stone"
  }
];
