import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi"; // Import the search icon from react-icons
import add from "../assets/add.svg";
import notify from "../assets/notifications.svg";
import person from "../assets/personcircle.svg";
import burger from "../assets/reorderfour.svg";
function Header() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-900 shadow-md">
        <div className="flex flex-row">
          <motion.div
            className="font-sans font-semibold text-2xl md:text-4xl grid grid-cols-2 p-4 px-8 md:px-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="text-right">EDU+</div>
          </motion.div>
        </div>
        <div className="flex flex-row font-sans text-sm md:text-base">
          <div className="relative w-full flex items-center">
            <BiSearch
              size={24}
              className="absolute left-3 top-6.5 text-gray-500"
            />
            <motion.input
              className="pl-10 shadow appearance-none border border-[#40DBDB] rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="text"
              placeholder="Password"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-6 md:justify-end md:px-8">
          <motion.img src={add} />
          <motion.img src={notify} />
          <motion.img src={person} />
          <motion.img src={burger} />
          <motion.button
            className="shadow appearance-none border bg-[#40DBDB] rounded-full py-1 px-6 md:px-12 truncate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Upgrade: Free 14 days trial
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Header;
