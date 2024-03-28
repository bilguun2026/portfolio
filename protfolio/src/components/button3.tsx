import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 border rounded-2xl w-full h-32 my-4 bg-white p-8">
      <Link to={"/flashcard"} className="w-full">
        <motion.div
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded cursor-pointer text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Flashcard
        </motion.div>
      </Link>
    </div>
  );
};

export default Button;
