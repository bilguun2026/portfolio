import Header from "../components/header";
import { motion } from "framer-motion";
import CardComponent from "../components/card";
import cardData from "../data/homeCardData";

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
        <div className="grid grid-cols-3 grid-rows-2 px-12 h-auto justify-items-center items-center space-y-4 space-x-4">
        {cardData.map(item => (
        <div key={item.id}>
          <CardComponent imageUrl={item.imageUrl} title={item.title} description={item.description} url={item.url} />
        </div>
      ))}
        </div>
      </div>
    </>
  );
}
export default Home;
