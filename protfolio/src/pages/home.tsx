import Header from "../components/header";
import { motion } from "framer-motion";

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
      </div>
    </>
  );
}
export default Home;
