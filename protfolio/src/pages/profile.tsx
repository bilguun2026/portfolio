import React from "react";
import { motion } from "framer-motion";
import { User } from "./signUp";

const Profile: React.FC<User> = ({ email, firstName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4"
    >
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold">{firstName}</span>
            <span className="text-sm text-gray-600">{email}</span>
          </div>
          <motion.img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="h-16 w-16 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
