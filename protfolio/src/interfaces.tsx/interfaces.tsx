// interfaces.ts

export type { Answer, Question, Quiz };

interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}
