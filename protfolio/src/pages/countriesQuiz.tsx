import React, { useState } from "react";
import Quiz from "../components/quiz";
import { Quiz as QuizType } from "../interfaces.tsx/interfaces";
import quizData from "../data/quizDatas";
import Header from "../components/header";

const CountriesQuizPage: React.FC = () => {
  const countriesQuizzes = quizData.filter(
    (quiz) => quiz.title === "Countries Quiz"
  );

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const handleAnswerSelected = () => {
    if (currentQuizIndex + 1 < countriesQuizzes.length) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      // Optionally, handle end of quizzes
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Countries Quiz</h1>
        {currentQuizIndex < countriesQuizzes.length && (
          <Quiz
            quiz={countriesQuizzes[currentQuizIndex]}
            onAnswerSelected={handleAnswerSelected}
          />
        )}
      </div>
    </>
  );
};

export default CountriesQuizPage;
