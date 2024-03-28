import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute right-0 mt-2 w-32 h-24 bg-white rounded-md shadow-lg z-50"
    >
      <div className="py-1">
        <Link to={"/profile"}>
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 w-full text-left"
          >
            Profile
          </motion.button>
        </Link>
        <Link to={"/login"}>
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 w-full text-left"
          >
            Logout
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Dropdown;
