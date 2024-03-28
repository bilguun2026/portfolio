import React from "react";
import {
  Question as QuestionType,
  Answer,
  Question,
} from "../interfaces.tsx/interfaces";
import { useMyContext } from "../context/quizContext";

interface QuestionComponentProps {
  question: QuestionType;
  onAnswerSelected: (isCorrect: boolean) => void;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  onAnswerSelected,
}) => {
  const { addData, addQuestion } = useMyContext();

  const handleAnswerClick = (answer: Answer) => {
    onAnswerSelected(answer.isCorrect);
    addData(answer);
  };

  const handleQuestionClick = (question: Question) => {
    addQuestion(question);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{question.text}</h2>
      <ul className="space-y-2">
        {question.answers.map((answer) => (
          <li
            key={answer.id}
            className="block cursor-pointer bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
            onClick={() => {
              handleAnswerClick(answer);
              handleQuestionClick(question);
            }}
          >
            {answer.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
