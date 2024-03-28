import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi"; // Import the search icon from react-icons
import add from "../assets/add.svg";
import notify from "../assets/notifications.svg";
import person from "../assets/personcircle.svg";
import burger from "../assets/reorderfour.svg";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 ${
        scrollY === 0 ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 shadow-md">
        <div className="flex flex-row items-center justify-center md:justify-start">
          <motion.div
            className="font-sans font-semibold text-2xl md:text-4xl grid grid-cols-2 p-4 px-8 md:px-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/">
              <div className="text-right">EDU+</div>
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-row items-center">
          <div className="relative w-full flex items-center">
            <BiSearch
              size={24}
              className="absolute left-3 top-6.5 text-gray-500"
            />
            <motion.input
              className="pl-10 shadow appearance-none border border-[#45F6F6] rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="text"
              placeholder="Search"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-6 md:justify-end md:px-8">
          <Link to="/flashcard">
            <motion.img src={add} className="cursor-pointer" />
          </Link>
          <div className="relative">
            <motion.img
              src={person}
              className="cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && <Dropdown />}
          </div>
          <motion.button
            className="shadow appearance-none border text-white bg-[#45F6F6] rounded-full py-1 px-6 md:px-12 truncate transition-all hover:bg-white hover:text-black hover:border-[#45F6F6]"
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
    </div>
  );
}

export default Header;
