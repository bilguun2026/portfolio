import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import hero from "../assets/hero.jpeg";
import fb from "../assets/fb.png";

interface LoginProps {
  isLoggedIn: boolean;
  handleLogin: (email: string, password: string) => void;
}

function Login({ isLoggedIn, handleLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    handleLogin(email, password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 grid-rows-5 bg-gradient-to-b h-screen from-[#40DBDB] to-[#ffffff]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="col-span-1 md:col-span-1 row-span-1 md:row-span-1 font-sans text-[45px] md:text-3xl grid grid-cols-2 p-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="col-span-1 text-center md:text-right md:col-span-1 md:col-start-1">
            MILEDU
          </div>
          <div className="col-span-1 pt-4 w-4 h-2 flex items-center justify-center">
            +
          </div>
        </motion.div>
        <motion.div
          className="z-10 col-span-3 row-span-3 md:row-span-1.5 row-start-2 col-start-2 font-sans grid grid-cols-1 md:grid-cols-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="col-span-1 md:flex md:flex-col md:items-center md:justify-center pt-8 md:pt-6">
            <div className="flex items-center justify-center text-[18px] px-2">
              Welcome to MILEDU+
            </div>
            <div className="flex items-center justify-center text-[18px] pt-2 md:pt-[30px] px-2">
              Sign in
            </div>
            <div className="flex items-center justify-center text-[18px] pt-[5px] px-2">
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-xs font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <HiOutlineMail className="absolute left-2 top-2 text-gray-500" />
                  <motion.input
                    className="pl-8 shadow appearance-none border border-[#40DBDB] rounded-lg w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
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
            <div className="flex items-center justify-center text-[18px] px-2">
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-xs font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-2 top-2 text-gray-500" />
                  <motion.input
                    className="pl-8 shadow appearance-none border border-[#40DBDB] rounded-lg w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  />
                </div>
                <label
                  className="block text-gray-700 text-xs font-light text-right pt-1"
                  htmlFor="password"
                >
                  <a href="#">forgot password?</a>
                </label>
              </div>
            </div>

            <motion.div
              className="flex items-center justify-center text-[20px] px-8 md:px-0 pt-2 md:pt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                className="shadow appearance-none border bg-[#40DBDB] rounded-lg w-full py-2 md:py-1 px-8 md:px-4 mx-1 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                onClick={handleSubmit}
              >
                Login
              </motion.button>
              <Link to="/signup">
                <motion.button
                  className="shadow appearance-none border border-[#40DBDB] rounded-lg w-full py-2 md:py-1 px-8 md:px-4 mx-1 text-sm"
                  whileHover={{ scale: 1.05, borderColor: "#2db6b6" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  SignUp
                </motion.button>
              </Link>
            </motion.div>
            <motion.div className="flex items-center justify-center text-[20px] px-8 md:px-0 pt-2">
              or
            </motion.div>
            <motion.div className="flex items-center justify-center text-[20px] px-8 md:px-0 pt-2 space-x-3">
              <motion.img
                src={apple}
                className="w-8 h-8"
                whileHover={{ scale: 1.2 }}
              />
              <motion.img
                src={fb}
                className="w-8 h-8"
                whileHover={{ scale: 1.2 }}
              />
              <motion.img
                src={google}
                className="w-8 h-8"
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
          </div>
          <div className=" md:block col-span-1 md:col-span-1 w-full h-[424px] flex items-center justify-center">
            <motion.img
              src={hero}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="z-0 col-span-3 row-span-3 row-start-2 col-start-2 font-sans grid grid-cols-2 bg-[#ECEAEA] rounded-[20px] opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        ></motion.div>
      </motion.div>
    </>
  );
}

export default Login;
