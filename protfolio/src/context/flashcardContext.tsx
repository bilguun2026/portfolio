import React, { createContext, useContext, useState, FC, ReactNode } from "react";

interface Flashcard {
  question: string;
  answer: string;
}

interface FlashcardContextType {
  flashcards: Flashcard[];
  addFlashcard: (newFlashcard: Flashcard) => void;
  deleteFlashcard: (index: number) => void;
}

const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

export const useFlashcardContext = (): FlashcardContextType => {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error("useFlashcardContext must be used within a FlashcardProvider");
  }
  return context;
};

interface FlashcardProviderProps {
  children: ReactNode;
}

export const FlashcardProvider: FC<FlashcardProviderProps> = ({ children }) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  const addFlashcard = (newFlashcard: Flashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  const deleteFlashcard = (index: number) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index);
    setFlashcards(updatedFlashcards);
  };

  return (
    <FlashcardContext.Provider value={{ flashcards, addFlashcard, deleteFlashcard }}>
      {children}
    </FlashcardContext.Provider>
  );
};
