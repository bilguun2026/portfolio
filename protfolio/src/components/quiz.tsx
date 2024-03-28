import React, { useState } from "react";
import {
  Quiz as QuizType,
  Question,
  Answer,
} from "../interfaces.tsx/interfaces";
import QuestionComponent from "./question";
import Timer from "./timer";
import { useMyContext } from "../context/quizContext";
import ResultComponent from "./result";
import Button from "./button3";

interface QuizProps {
  quiz: QuizType;
  onAnswerSelected: () => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onAnswerSelected }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const { dataArray, questionArray, clearData } = useMyContext();

  console.log(dataArray, questionArray, "test");

  const handleAnswerSelected = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswerCount((prevCount) => prevCount + 1);
    }
    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setCorrectAnswerCount(0);
  };

  const handleTimeExpired = () => {
    setQuizCompleted(true);
  };

  if (quizCompleted) {
    const score = (correctAnswerCount / quiz.questions.length) * 100;
    return (
      <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Your Score: {score.toFixed(2)}%
        </h2>
        <div className="flex items-end justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
            onClick={() => {
              restartQuiz();
              clearData();
            }}
          >
            Restart Quiz
          </button>
        </div>
        <ResultComponent />
        <Button />
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md border border-gray-200">
      <Timer durationInSeconds={30} onTimeExpired={handleTimeExpired} />
<<<<<<< HEAD
      <QuestionComponent
        question={currentQuestion}
        onAnswerSelected={handleAnswerSelected}
      />
      <Button />
=======
      <div className="border-t border-gray-200 pt-4">
        <QuestionComponent
          question={currentQuestion}
          onAnswerSelected={handleAnswerSelected}
        />
      </div>
>>>>>>> 44ddfbcd9d94a5451f519cc345b71f84d555feac
    </div>
  );
};

export default Quiz;
