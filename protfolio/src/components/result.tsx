import React from "react";
import { useMyContext } from "../context/quizContext";
import { Answer, Question } from "../interfaces.tsx/interfaces";

const ResultComponent: React.FC = () => {
  const { dataArray, questionArray } = useMyContext();

  if (dataArray.length !== questionArray.length) {
    return <p>Error: Question and answer arrays have different lengths.</p>;
  }

  const lastTenQuestions = questionArray.slice(-10);
  const lastTenAnswers = dataArray.slice(-10);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <div className="divide-y divide-gray-200">
        <ol className="list-decimal pl-6">
          {lastTenQuestions.map((question: Question, index: number) => (
            <li key={index} className="py-4">
              <div className="flex items-start mb-2">
                <p className="text-lg font-semibold">{question.text}</p>
              </div>
              <p
                className={`text-base ${
                  lastTenAnswers[index].isCorrect
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {lastTenAnswers[index].text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ResultComponent;
