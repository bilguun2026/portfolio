import React, { FC } from "react";
import { AiFillDelete } from "react-icons/ai";

interface FlashcardProps {
  question: string;
  answer: string;
  onDelete: () => void;
}

const Flashcard: FC<FlashcardProps> = ({ question, answer, onDelete }) => {
  return (
    <div className="border py-4 px-2 rounded-md bg-white w-full flex flex-row items-center">
      <div className="w-2/5 flex flex-row">
        <h3 className="font-bold ">Асуулт:</h3>
        <p className="ml-4">{question}</p>
      </div>
      <div className="w-3/5 flex flex-row">
        <h3 className="font-bold">Хариулт:</h3>
        <p className="ml-4">{answer}</p>
      </div>
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
