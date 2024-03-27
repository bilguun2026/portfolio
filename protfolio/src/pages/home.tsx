import Header from "../components/header";
import { motion } from "framer-motion";
import comp from "../assets/computer--quiz@2x.png";
import flag from "../assets/flag-quiz@2x.png";
import scie from "../assets/science-quiz@2x.png";
import hist from "../assets/history--quiz@2x.png";
import art from "../assets/rectangle-15@2x.png";
import math from "../assets/math--quiz@2x.png";

function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-row items-center justify-center h-36 px-24 space-x-8 ">
          <motion.button
            className="shadow appearance-none border border-[#40DBDB] rounded-full w-full py-1 px-12 mx-1"
            whileHover={{ scale: 1.05, borderColor: "#2db6b6" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            IQ Асуулт
          </motion.button>
          <motion.button
            className="shadow appearance-none border border-[#40DBDB] rounded-full w-full py-1 px-12 mx-1"
            whileHover={{ scale: 1.05, borderColor: "#2db6b6" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Танин мэдэхүй
          </motion.button>
          <motion.button
            className="shadow appearance-none border border-[#40DBDB] rounded-full w-full py-1 px-12 mx-1"
            whileHover={{ scale: 1.05, borderColor: "#2db6b6" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Боловсрол
          </motion.button>
          <motion.button
            className="shadow appearance-none border border-[#40DBDB] rounded-full w-full py-1 px-12 mx-1"
            whileHover={{ scale: 1.05, borderColor: "#2db6b6" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Тоглоом
          </motion.button>
          <motion.button
            className="shadow appearance-none border border-[#40DBDB] rounded-full w-full py-1 px-12 mx-1"
            whileHover={{ scale: 1.05, borderColor: "#2db6b6" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Шинжлэх ухаан
          </motion.button>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 px-12 h-auto justify-items-center items-center space-y-4">
          <div className="w-[350px] h-[380px] rounded-xl flex flex-col items-center justify-center relative">
            <div className="absolute border border-zinc-400 bottom-0 bg-white rounded-t-2xl w-full h-24 z-10 shadow-inner flex items-center justify-center">
              Газрын зураг
            </div>
            <img src={flag} className="absolute top-0" />
          </div>
          <div className="w-[350px] h-[380px] rounded-xl flex flex-col items-center justify-center relative">
            <img src={comp} className="absolute top-0" />
            <div className="absolute border border-zinc-400 bottom-0 bg-white rounded-t-2xl w-full h-24 z-10 shadow-inner flex items-center justify-center">
              Танин мэдэхүй
            </div>
          </div>
          <div className="w-[350px] h-[380px] rounded-xl flex flex-col items-center justify-center relative">
            <img src={math} className="absolute top-0" />
            <div className="absolute border border-zinc-400 bottom-0 bg-white rounded-t-2xl w-full h-24 z-10 shadow-inner flex items-center justify-center">
              Тоо бодох
            </div>
          </div>
          <div className="w-[350px] h-[380px] rounded-xl flex flex-col items-center justify-center relative">
            <img src={scie} className="absolute top-0" />
            <div className="absolute border border-zinc-400 bottom-0 bg-white rounded-t-2xl w-full h-24 z-10 shadow-inner flex items-center justify-center">
              Шинжлэх ухаан
            </div>
          </div>
          <div className="w-[350px] h-[380px] rounded-xl flex flex-col items-center justify-center relative">
            <img src={hist} className="absolute top-0" />
            <div className="absolute border border-zinc-400 bottom-0 bg-white rounded-t-2xl w-full h-24 z-10 shadow-inner flex items-center justify-center">
              Түүх
            </div>
          </div>
          <div className="w-[350px] h-[380px] rounded-xl flex flex-col items-center justify-center relative">
            <img src={art} className="absolute top-0" />
            <div className="absolute border border-zinc-400 bottom-0 bg-white rounded-t-2xl w-full h-24 z-10 shadow-inner flex items-center justify-center">
              Уран зураг
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
