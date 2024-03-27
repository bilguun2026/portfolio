import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import hero from "../assets/hero.png";
import fb from "../assets/fb.png";
import { Navigate } from "react-router-dom";

export interface User {
  id: number;
  firstName: string;
  email: string;
  password: string;
}

interface SignProps {
  users: User[];
  handleSignup: (newUser: User) => void;
}

function Sign({ users, handleSignup }: SignProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Create a new user object
    const newUser: User = {
      id: users.length + 1, // Assign a unique ID
      firstName,
      email,
      password,
    };

    // Call the handleSignup function from props to add the new user
    handleSignup(newUser);

    // Clear the input fields after submission
    setFirstName("");
    setEmail("");
    setPassword("");
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <motion.div
        className="grid grid-cols-5 grid-rows-5 bg-gradient-to-b h-screen from-[#40DBDB] to-[#ffffff]"
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation to run when component mounts
        transition={{ duration: 0.5 }} // Animation transition duration
      >
        <motion.div
          className="col-span-1 row-span-1 font-sans text-[45px] grid grid-cols-2 p-8"
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation to run when component mounts
          transition={{ delay: 0.2, duration: 0.5 }} // Animation transition duration and delay
        >
          <div className="col-span-1 text-right">EDU</div>
          <div className="col-span-1 pt-8 w-8 h-8 flex items-center justify-center">
            +
          </div>
        </motion.div>
        <motion.div
          className="z-10 col-span-3 row-span-3 row-start-2 col-start-2 font-sans grid grid-cols-2"
          initial={{ opacity: 0, scale: 0.9 }} // Initial animation state
          animate={{ opacity: 1, scale: 1 }} // Animation to run when component mounts
          transition={{ delay: 0.4, duration: 0.5 }} // Animation transition duration and delay
        >
          <div className="col-span-1 flex-col items-center justify-center pt-[88px] ">
            <div className="flex items-center justify-center text-[20px]  px-4">
              Welcome to EDU+
            </div>
            <div className="flex items-center justify-center text-[20px] pt-[50px] px-4">
              Sign up
            </div>
            <div className="flex items-center justify-center text-[20px] pt-[5px] px-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold"
                  htmlFor={"Firstname"}
                >
                  Firstname
                </label>
                <div className="relative">
                  <HiOutlineMail className="absolute left-3 top-3 text-gray-500" />
                  <motion.input
                    className="pl-10 shadow appearance-none border border-[#40DBDB] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Firstname"
                    type="text"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-[20px] px-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold"
                  htmlFor={"email"}
                >
                  Email
                </label>
                <div className="relative">
                  <HiOutlineMail className="absolute left-3 top-3 text-gray-500" />
                  <motion.input
                    className="pl-10 shadow appearance-none border border-[#40DBDB] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-[20px]  px-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold"
                  htmlFor={"Password"}
                >
                  Password
                </label>
                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-3 top-3 text-gray-500" />
                  <motion.input
                    className="pl-10 shadow appearance-none border border-[#40DBDB] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Password"
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  />
                </div>
                <label
                  className="block text-gray-700 text-sm font-light text-right pt-2"
                  htmlFor={"Password"}
                >
                  <a href="?">forgot password?</a>
                </label>
              </div>
            </div>
            <motion.div
              className="flex items-center justify-center text-[20px] px-36"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                className="shadow appearance-none border bg-[#40DBDB] rounded-lg w-full py-1 px-12 mx-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                onClick={handleSubmit}
              >
                Sign up
              </motion.button>
            </motion.div>
            <motion.div className="flex items-center justify-center text-[20px] px-36 py-2">
              or
            </motion.div>
            <motion.div className="flex items-center justify-center text-[20px] px-36 py-2 space-x-3">
              <motion.img src={apple} className="w-8 h-8" />
              <motion.img src={fb} className="w-8 h-8" />
              <motion.img src={google} className="w-8 h-8" />
            </motion.div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <motion.img src={hero} className="" />
          </div>
        </motion.div>
        <motion.div
          className="z-0 col-span-3 row-span-3 row-start-2 col-start-2 font-sans grid grid-cols-2 bg-[#ECEAEA] rounded-[20px] opacity-75"
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 0.75 }} // Animation to run when component mounts
          transition={{ delay: 0.6, duration: 0.5 }} // Animation transition duration and delay
        ></motion.div>
      </motion.div>
    </>
  );
}
export default Sign;
