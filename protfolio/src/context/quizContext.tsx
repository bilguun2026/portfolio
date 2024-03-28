import React, { createContext, useState, useContext } from "react";
import { Answer, Question } from "../interfaces.tsx/interfaces";

interface IContext {
  dataArray: Answer[];
  questionArray: Question[];
  setquestionArray: React.Dispatch<React.SetStateAction<Question[]>>;
  setDataArray: React.Dispatch<React.SetStateAction<Answer[]>>;
  addData: (newData: Answer) => void;
  addQuestion: (newData: Question) => void;
  updateData: (index: number, updatedData: Answer) => void;
  deleteData: (index: number) => void;
  clearData: () => void;
}

const MyContext = createContext<IContext | undefined>(undefined);

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [dataArray, setDataArray] = useState<Answer[]>([]);
  const [questionArray, setquestionArray] = useState<Question[]>([]);

  const addData = (newData: Answer) => {
    setDataArray((prevData) => [...prevData, newData]);
  };

  const addQuestion = (newData: Question) => {
    setquestionArray((prevData) => [...prevData, newData]);
  };

  const updateData = (index: number, updatedData: Answer) => {
    setDataArray((prevData) => {
      const newDataArray = [...prevData];
      newDataArray[index] = updatedData;
      return newDataArray;
    });
  };

  const deleteData = (index: number) => {
    setDataArray((prevData) => {
      const newDataArray = [...prevData];
      newDataArray.splice(index, 1);
      return newDataArray;
    });
  };

  const clearData = () => {
    setDataArray([]);
    setquestionArray([]);
  };

  return (
    <MyContext.Provider
      value={{
        dataArray,
        setDataArray,
        addData,
        updateData,
        deleteData,
        setquestionArray,
        questionArray,
        addQuestion,
        clearData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
