import React, { FC } from "react";
import { AiFillDelete } from "react-icons/ai";

interface FlashcardProps {
  question: string;
  answer: string;
  onDelete: () => void;
}

const Flashcard: FC<FlashcardProps> = ({ question, answer, onDelete }) => {
  return (
    <div className="border p-4 rounded-md bg-white w-full flex flex-row items-center">
      <h3 className="font-bold w-2/5">Question:</h3>
      <p>{question}</p>
      <h3 className="font-bold w-3/5">Answer:</h3>
      <p>{answer}</p>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white w-12 h-12 rounded-md flex items-center justify-center"
      >
        <AiFillDelete size={24} />
      </button>
    </div>
  );
};

export default Flashcard;
