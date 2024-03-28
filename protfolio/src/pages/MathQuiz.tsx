import React, { useState } from "react";
import Quiz from "../components/quiz";
import { Quiz as QuizType } from "../interfaces.tsx/interfaces";
import quizData from "../data/quizDatas";
import Header from "../components/header";

const MathQuizPage: React.FC = () => {
  const MathQuizzes = quizData.filter(
    (quiz) => quiz.title === "Math Quiz"
  );

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const handleAnswerSelected = () => {
    if (currentQuizIndex + 1 < MathQuizzes.length) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      // Optionally, handle end of quizzes
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto py-8 flex justify-center">
        <h1 className="text-3xl font-bold mb-4">Math Quiz</h1>
      </div>
      {currentQuizIndex < MathQuizzes.length && (
        <Quiz
          quiz={MathQuizzes[currentQuizIndex]}
          onAnswerSelected={handleAnswerSelected}
        />
      )}
    </>
  );
};

export default MathQuizPage;
