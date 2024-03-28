import React, { FC } from "react";
import { AiFillDelete } from "react-icons/ai";

interface FlashcardProps {
  question: string;
  answer: string;
  onDelete: () => void;
}

const Flashcard: FC<FlashcardProps> = ({ question, answer, onDelete }) => {
  return (
    <div className="border py-4 px-6 rounded-lg bg-white w-full flex flex-row items-center shadow-md">
      <div className="w-2/5 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">Question:</h3>
        <p className="text-gray-700">{question}</p>
      </div>
      <div className="w-3/5 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">Answer:</h3>
        <p className="text-gray-700">{answer}</p>
      </div>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center ml-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white"
      >
        <AiFillDelete size={20} />
      </button>
    </div>
  );
};

export default Flashcard;
