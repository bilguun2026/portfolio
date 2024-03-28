import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-[50px] font-semibold mb-4">{question.text}</h2>
      <div className="grid grid-cols-2 gap-4">
        {question.answers.map((answer) => (
          <motion.button
            key={answer.id}
            className="bg-[#47EBEB] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            onClick={() => {
              handleAnswerClick(answer);
              handleQuestionClick(question);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.90 }}
            transition={{ duration: 0.2 }}
          >
            {answer.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionComponent;
