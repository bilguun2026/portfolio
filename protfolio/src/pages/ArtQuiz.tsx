import React, { useState } from "react";
import Quiz from "../components/quiz";
import { Quiz as QuizType } from "../interfaces.tsx/interfaces";
import quizData from "../data/quizDatas";
import Header from "../components/header";

const ArtQuizPage: React.FC = () => {
  const ArtQuizzes = quizData.filter(
    (quiz) => quiz.title === "Art Quiz"
  );

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const handleAnswerSelected = () => {
    if (currentQuizIndex + 1 < ArtQuizzes.length) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      // Optionally, handle end of quizzes
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto py-8 flex justify-center">
        <h1 className="text-3xl font-bold mb-4">Map Quiz</h1>
      </div>
      {currentQuizIndex < ArtQuizzes.length && (
        <Quiz
          quiz={ArtQuizzes[currentQuizIndex]}
          onAnswerSelected={handleAnswerSelected}
        />
      )}
    </>
  );
};

export default ArtQuizPage;
