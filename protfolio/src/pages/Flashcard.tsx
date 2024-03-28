import React, { FC, useState } from "react";
import { useFlashcardContext } from "../context/flashcardContext";
import Flashcard from "../components/Flashcard";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const FlashcardMakerPage: FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const { addFlashcard, flashcards, deleteFlashcard } = useFlashcardContext();

  const handleAddFlashcard = () => {
    if (question && answer) {
      addFlashcard({ question, answer });
      setQuestion("");
      setAnswer("");
    } else {
      alert("Please enter both question and answer.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#47EBEB] to-[#CBE1E1] h-screen p-8">
      <Link to="/">
        <div className="text-bold text-[50px]">EDU+</div>
      </Link>
      <h1 className="text-3xl font-bold my-4">Flashcard Maker</h1>
      <div className="mb-4 bg-white flex flex-row border rounded-xl p-2">
        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-2 mr-2 w-2/5"
        />
        <div className="bg-zinc-400 w-0.5 h-auto"></div>
        <input
          type="text"
          placeholder="Enter answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border ml-2 p-2 w-3/5"
        />
        <button
          onClick={handleAddFlashcard}
          className="bg-green-500 w-12 h-12 flex items-center justify-center text-white font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
        >
          <FaPlus size={24} />
        </button>
      </div>
      {flashcards.length > 0 && (
        <div className="">
          {flashcards.map((flashcard, index) => (
            <Flashcard
              key={index}
              question={flashcard.question}
              answer={flashcard.answer}
              onDelete={() => {
                if (typeof index === "number") {
                  deleteFlashcard(index);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlashcardMakerPage;
