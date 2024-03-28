// quizData.ts
import { Quiz, Question, Answer } from "../interfaces.tsx/interfaces";

const countriesQuiz: Quiz = {
  id: 1,
  title: "Countries Quiz",
  questions: [
    {
      id: 1,
      text: "What is the capital of France?",
      answers: [
        { id: 1, text: "Rome", isCorrect: false },
        { id: 2, text: "Berlin", isCorrect: false },
        { id: 3, text: "Paris", isCorrect: true },
        { id: 4, text: "Madrid", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { id: 1, text: "China", isCorrect: false },
        { id: 2, text: "Japan", isCorrect: true },
        { id: 3, text: "India", isCorrect: false },
        { id: 4, text: "Australia", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "What is the largest country by land area?",
      answers: [
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Canada", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
        { id: 4, text: "United States", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Which country is famous for the Great Wall?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "Italy", isCorrect: false },
        { id: 4, text: "Mexico", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "What is the official language of Brazil?",
      answers: [
        { id: 1, text: "Portuguese", isCorrect: true },
        { id: 2, text: "Spanish", isCorrect: false },
        { id: 3, text: "English", isCorrect: false },
        { id: 4, text: "French", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "Which continent is Egypt located in?",
      answers: [
        { id: 1, text: "Africa", isCorrect: true },
        { id: 2, text: "Asia", isCorrect: false },
        { id: 3, text: "Europe", isCorrect: false },
        { id: 4, text: "South America", isCorrect: false },
      ],
    },
    {
      id: 7,
      text: "What is the national animal of Australia?",
      answers: [
        { id: 1, text: "Kangaroo", isCorrect: true },
        { id: 2, text: "Koala", isCorrect: false },
        { id: 3, text: "Emu", isCorrect: false },
        { id: 4, text: "Dingo", isCorrect: false },
      ],
    },
    {
      id: 8,
      text: 'Which European country is known as the "Land of Fire and Ice"?',
      answers: [
        { id: 1, text: "Iceland", isCorrect: true },
        { id: 2, text: "Ireland", isCorrect: false },
        { id: 3, text: "Norway", isCorrect: false },
        { id: 4, text: "Greenland", isCorrect: false },
      ],
    },
    {
      id: 9,
      text: "Which country has the largest population in the world?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "United States", isCorrect: false },
        { id: 4, text: "Brazil", isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "What is the capital of Australia?",
      answers: [
        { id: 1, text: "Canberra", isCorrect: true },
        { id: 2, text: "Sydney", isCorrect: false },
        { id: 3, text: "Melbourne", isCorrect: false },
        { id: 4, text: "Perth", isCorrect: false },
      ],
    },
    // Add more questions here if needed
  ],
};

const knowledgeQuiz: Quiz = {
  id: 2,
  title: "Knowledge Quiz",
  questions: [
    {
      id: 1,
      text: "What is the chemical symbol for water?",
      answers: [
        { id: 1, text: "H2O", isCorrect: true },
        { id: 2, text: "CO2", isCorrect: false },
        { id: 3, text: "O2", isCorrect: false },
        { id: 4, text: "N2", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { id: 1, text: "Japan", isCorrect: true },
        { id: 2, text: "China", isCorrect: false },
        { id: 3, text: "India", isCorrect: false },
        { id: 4, text: "Australia", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "What is the largest country by land area?",
      answers: [
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Canada", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
        { id: 4, text: "United States", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Which country is famous for the Great Wall?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "Italy", isCorrect: false },
        { id: 4, text: "Mexico", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "What is the official language of Brazil?",
      answers: [
        { id: 1, text: "Portuguese", isCorrect: true },
        { id: 2, text: "Spanish", isCorrect: false },
        { id: 3, text: "English", isCorrect: false },
        { id: 4, text: "French", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "Which continent is Egypt located in?",
      answers: [
        { id: 1, text: "Africa", isCorrect: true },
        { id: 2, text: "Asia", isCorrect: false },
        { id: 3, text: "Europe", isCorrect: false },
        { id: 4, text: "South America", isCorrect: false },
      ],
    },
    {
      id: 7,
      text: "What is the national animal of Australia?",
      answers: [
        { id: 1, text: "Kangaroo", isCorrect: true },
        { id: 2, text: "Koala", isCorrect: false },
        { id: 3, text: "Emu", isCorrect: false },
        { id: 4, text: "Dingo", isCorrect: false },
      ],
    },
    {
      id: 8,
      text: 'Which European country is known as the "Land of Fire and Ice"?',
      answers: [
        { id: 1, text: "Iceland", isCorrect: true },
        { id: 2, text: "Ireland", isCorrect: false },
        { id: 3, text: "Norway", isCorrect: false },
        { id: 4, text: "Greenland", isCorrect: false },
      ],
    },
    {
      id: 9,
      text: "Which country has the largest population in the world?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "United States", isCorrect: false },
        { id: 4, text: "Brazil", isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "What is the capital of Australia?",
      answers: [
        { id: 1, text: "Canberra", isCorrect: true },
        { id: 2, text: "Sydney", isCorrect: false },
        { id: 3, text: "Melbourne", isCorrect: false },
        { id: 4, text: "Perth", isCorrect: false },
      ],
    },
    // Add more questions here
  ],
};

const MathQuiz: Quiz = {
  id: 2,
  title: "Math Quiz",
  questions: [
    {
      id: 1,
      text: "What is the chemical symbol for water?",
      answers: [
        { id: 1, text: "H2O", isCorrect: true },
        { id: 2, text: "CO2", isCorrect: false },
        { id: 3, text: "O2", isCorrect: false },
        { id: 4, text: "N2", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { id: 1, text: "Japan", isCorrect: true },
        { id: 2, text: "China", isCorrect: false },
        { id: 3, text: "India", isCorrect: false },
        { id: 4, text: "Australia", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "What is the largest country by land area?",
      answers: [
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Canada", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
        { id: 4, text: "United States", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Which country is famous for the Great Wall?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "Italy", isCorrect: false },
        { id: 4, text: "Mexico", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "What is the official language of Brazil?",
      answers: [
        { id: 1, text: "Portuguese", isCorrect: true },
        { id: 2, text: "Spanish", isCorrect: false },
        { id: 3, text: "English", isCorrect: false },
        { id: 4, text: "French", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "Which continent is Egypt located in?",
      answers: [
        { id: 1, text: "Africa", isCorrect: true },
        { id: 2, text: "Asia", isCorrect: false },
        { id: 3, text: "Europe", isCorrect: false },
        { id: 4, text: "South America", isCorrect: false },
      ],
    },
    {
      id: 7,
      text: "What is the national animal of Australia?",
      answers: [
        { id: 1, text: "Kangaroo", isCorrect: true },
        { id: 2, text: "Koala", isCorrect: false },
        { id: 3, text: "Emu", isCorrect: false },
        { id: 4, text: "Dingo", isCorrect: false },
      ],
    },
    {
      id: 8,
      text: 'Which European country is known as the "Land of Fire and Ice"?',
      answers: [
        { id: 1, text: "Iceland", isCorrect: true },
        { id: 2, text: "Ireland", isCorrect: false },
        { id: 3, text: "Norway", isCorrect: false },
        { id: 4, text: "Greenland", isCorrect: false },
      ],
    },
    {
      id: 9,
      text: "Which country has the largest population in the world?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "United States", isCorrect: false },
        { id: 4, text: "Brazil", isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "What is the capital of Australia?",
      answers: [
        { id: 1, text: "Canberra", isCorrect: true },
        { id: 2, text: "Sydney", isCorrect: false },
        { id: 3, text: "Melbourne", isCorrect: false },
        { id: 4, text: "Perth", isCorrect: false },
      ],
    },
    // Add more questions here
  ],
};

const scienceQuiz: Quiz = {
  id: 3,
  title: "Science Quiz",
  questions: [
    {
      id: 1,
      text: "Who discovered the theory of relativity?",
      answers: [
        { id: 1, text: "Isaac Newton", isCorrect: false },
        { id: 2, text: "Albert Einstein", isCorrect: true },
        { id: 3, text: "Galileo Galilei", isCorrect: false },
        { id: 4, text: "Stephen Hawking", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { id: 1, text: "Japan", isCorrect: true },
        { id: 2, text: "China", isCorrect: false },
        { id: 3, text: "India", isCorrect: false },
        { id: 4, text: "Australia", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "What is the largest country by land area?",
      answers: [
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Canada", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
        { id: 4, text: "United States", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Which country is famous for the Great Wall?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "Italy", isCorrect: false },
        { id: 4, text: "Mexico", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "What is the official language of Brazil?",
      answers: [
        { id: 1, text: "Portuguese", isCorrect: true },
        { id: 2, text: "Spanish", isCorrect: false },
        { id: 3, text: "English", isCorrect: false },
        { id: 4, text: "French", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "Which continent is Egypt located in?",
      answers: [
        { id: 1, text: "Africa", isCorrect: true },
        { id: 2, text: "Asia", isCorrect: false },
        { id: 3, text: "Europe", isCorrect: false },
        { id: 4, text: "South America", isCorrect: false },
      ],
    },
    {
      id: 7,
      text: "What is the national animal of Australia?",
      answers: [
        { id: 1, text: "Kangaroo", isCorrect: true },
        { id: 2, text: "Koala", isCorrect: false },
        { id: 3, text: "Emu", isCorrect: false },
        { id: 4, text: "Dingo", isCorrect: false },
      ],
    },
    {
      id: 8,
      text: 'Which European country is known as the "Land of Fire and Ice"?',
      answers: [
        { id: 1, text: "Iceland", isCorrect: true },
        { id: 2, text: "Ireland", isCorrect: false },
        { id: 3, text: "Norway", isCorrect: false },
        { id: 4, text: "Greenland", isCorrect: false },
      ],
    },
    {
      id: 9,
      text: "Which country has the largest population in the world?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "United States", isCorrect: false },
        { id: 4, text: "Brazil", isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "What is the capital of Australia?",
      answers: [
        { id: 1, text: "Canberra", isCorrect: true },
        { id: 2, text: "Sydney", isCorrect: false },
        { id: 3, text: "Melbourne", isCorrect: false },
        { id: 4, text: "Perth", isCorrect: false },
      ],
    },
    // Add more questions here
  ],
};

const historyQuiz: Quiz = {
  id: 4,
  title: "History Quiz",
  questions: [
    {
      id: 1,
      text: "Who was the first president of the United States?",
      answers: [
        { id: 1, text: "Abraham Lincoln", isCorrect: false },
        { id: 2, text: "George Washington", isCorrect: true },
        { id: 3, text: "Thomas Jefferson", isCorrect: false },
        { id: 4, text: "John Adams", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { id: 1, text: "Japan", isCorrect: true },
        { id: 2, text: "China", isCorrect: false },
        { id: 3, text: "India", isCorrect: false },
        { id: 4, text: "Australia", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "What is the largest country by land area?",
      answers: [
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Canada", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
        { id: 4, text: "United States", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Which country is famous for the Great Wall?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "Italy", isCorrect: false },
        { id: 4, text: "Mexico", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "What is the official language of Brazil?",
      answers: [
        { id: 1, text: "Portuguese", isCorrect: true },
        { id: 2, text: "Spanish", isCorrect: false },
        { id: 3, text: "English", isCorrect: false },
        { id: 4, text: "French", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "Which continent is Egypt located in?",
      answers: [
        { id: 1, text: "Africa", isCorrect: true },
        { id: 2, text: "Asia", isCorrect: false },
        { id: 3, text: "Europe", isCorrect: false },
        { id: 4, text: "South America", isCorrect: false },
      ],
    },
    {
      id: 7,
      text: "What is the national animal of Australia?",
      answers: [
        { id: 1, text: "Kangaroo", isCorrect: true },
        { id: 2, text: "Koala", isCorrect: false },
        { id: 3, text: "Emu", isCorrect: false },
        { id: 4, text: "Dingo", isCorrect: false },
      ],
    },
    {
      id: 8,
      text: 'Which European country is known as the "Land of Fire and Ice"?',
      answers: [
        { id: 1, text: "Iceland", isCorrect: true },
        { id: 2, text: "Ireland", isCorrect: false },
        { id: 3, text: "Norway", isCorrect: false },
        { id: 4, text: "Greenland", isCorrect: false },
      ],
    },
    {
      id: 9,
      text: "Which country has the largest population in the world?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "United States", isCorrect: false },
        { id: 4, text: "Brazil", isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "What is the capital of Australia?",
      answers: [
        { id: 1, text: "Canberra", isCorrect: true },
        { id: 2, text: "Sydney", isCorrect: false },
        { id: 3, text: "Melbourne", isCorrect: false },
        { id: 4, text: "Perth", isCorrect: false },
      ],
    },
    // Add more questions here
  ],
};

const artQuiz: Quiz = {
  id: 5,
  title: "Art Quiz",
  questions: [
    {
      id: 1,
      text: "Who painted the Mona Lisa?",
      answers: [
        { id: 1, text: "Leonardo da Vinci", isCorrect: true },
        { id: 2, text: "Pablo Picasso", isCorrect: false },
        { id: 3, text: "Vincent van Gogh", isCorrect: false },
        { id: 4, text: "Michelangelo", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { id: 1, text: "Japan", isCorrect: true },
        { id: 2, text: "China", isCorrect: false },
        { id: 3, text: "India", isCorrect: false },
        { id: 4, text: "Australia", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "What is the largest country by land area?",
      answers: [
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Canada", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
        { id: 4, text: "United States", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Which country is famous for the Great Wall?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "Italy", isCorrect: false },
        { id: 4, text: "Mexico", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "What is the official language of Brazil?",
      answers: [
        { id: 1, text: "Portuguese", isCorrect: true },
        { id: 2, text: "Spanish", isCorrect: false },
        { id: 3, text: "English", isCorrect: false },
        { id: 4, text: "French", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "Which continent is Egypt located in?",
      answers: [
        { id: 1, text: "Africa", isCorrect: true },
        { id: 2, text: "Asia", isCorrect: false },
        { id: 3, text: "Europe", isCorrect: false },
        { id: 4, text: "South America", isCorrect: false },
      ],
    },
    {
      id: 7,
      text: "What is the national animal of Australia?",
      answers: [
        { id: 1, text: "Kangaroo", isCorrect: true },
        { id: 2, text: "Koala", isCorrect: false },
        { id: 3, text: "Emu", isCorrect: false },
        { id: 4, text: "Dingo", isCorrect: false },
      ],
    },
    {
      id: 8,
      text: 'Which European country is known as the "Land of Fire and Ice"?',
      answers: [
        { id: 1, text: "Iceland", isCorrect: true },
        { id: 2, text: "Ireland", isCorrect: false },
        { id: 3, text: "Norway", isCorrect: false },
        { id: 4, text: "Greenland", isCorrect: false },
      ],
    },
    {
      id: 9,
      text: "Which country has the largest population in the world?",
      answers: [
        { id: 1, text: "China", isCorrect: true },
        { id: 2, text: "India", isCorrect: false },
        { id: 3, text: "United States", isCorrect: false },
        { id: 4, text: "Brazil", isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "What is the capital of Australia?",
      answers: [
        { id: 1, text: "Canberra", isCorrect: true },
        { id: 2, text: "Sydney", isCorrect: false },
        { id: 3, text: "Melbourne", isCorrect: false },
        { id: 4, text: "Perth", isCorrect: false },
      ],
    },
    // Add more questions here
  ],
};

const quizData: Quiz[] = [
  countriesQuiz,
  knowledgeQuiz,
  scienceQuiz,
  historyQuiz,
  MathQuiz,
  artQuiz,
];

export default quizData;
