import React, { useState } from "react";
import { motion } from "framer-motion";
import { User } from "./signUp";
import Header from "../components/header";
import { FiEdit } from "react-icons/fi";
import profile from "../assets/profile.jpg";
import Modal from "../components/modal";

const Profile: React.FC<User> = ({ email, firstName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="h-screen w-full flex flex-row items-center justify-center gap-8"
      >
        <div className="flex flex-col">
          <div className="px-4 py-2 w-96 h-[500px] bg-zinc-700 rounded-2xl flex flex-col">
            <div className="flex flex-col items-center justify-between">
              <motion.img
                src={profile}
                alt="Profile"
                className="h-48 w-48 rounded-full mt-4 object-cover"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
            <div className="flex flex-col mt-14 text-[20px] font-bold text-white mx-10">
              <div className="flex flex-row justify-between">
                <div>Нэр: {firstName}</div>
                <motion.div
                  whileHover={{ scale: 1.1 }} // Example hover animation, adjust as needed
                  whileTap={{ scale: 0.9 }} // Example tap animation, adjust as needed
                >
                  <FiEdit size={24} color="white" />
                </motion.div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">Овог: Bat</div>
                <motion.div
                  whileHover={{ scale: 1.1 }} // Example hover animation, adjust as needed
                  whileTap={{ scale: 0.9 }} // Example tap animation, adjust as needed
                >
                  <FiEdit size={24} color="white" />
                </motion.div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">Утас: 99531051</div>
                <motion.div
                  whileHover={{ scale: 1.1 }} // Example hover animation, adjust as needed
                  whileTap={{ scale: 0.9 }} // Example tap animation, adjust as needed
                >
                  <FiEdit size={24} color="white" />
                </motion.div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">Email: {email}</div>
                <motion.div
                  whileHover={{ scale: 1.1 }} // Example hover animation, adjust as needed
                  whileTap={{ scale: 0.9 }} // Example tap animation, adjust as needed
                >
                  <FiEdit size={24} color="white" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="w-96 h-[184px] bg-black rounded-2xl mt-[16px] p-8 flex flex-col">
            <div className="flex flex-row justify-between text-white">
              <div className="flex flex-row">Багцийн мэдээлэл: </div>
              <motion.div
                whileHover={{ scale: 1.1 }} // Example hover animation, adjust as needed
                whileTap={{ scale: 0.9 }} // Example tap animation, adjust as needed
              >
                Энгийн
              </motion.div>
            </div>
            <div className="flex flex-row justify-between text-white">
              <div className="flex flex-row">Хугацаа: </div>
              <motion.div
                whileHover={{ scale: 1.1 }} // Example hover animation, adjust as needed
                whileTap={{ scale: 0.9 }} // Example tap animation, adjust as needed
              >
                ∞
              </motion.div>
            </div>
            <motion.button
              className="bg-white w-full rounded-full h-8 text-black font-bold mt-12"
              whileHover={{ scale: 1.1 }} // Increase scale on hover
              whileTap={{ scale: 0.9 }} // Decrease scale on tap
              transition={{ duration: 0.2 }} // Smooth transition duration
              onClick={openModal}
            >
              Premium хэрэглэгч болох
            </motion.button>
          </div>
        </div>
        <div className="p-8 w-[1000px] h-[700px] bg-[#999090] rounded-2xl flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">Recent</span>
            </div>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center h-full text-white font-bold text-[30px]"
            whileHover={{ scale: 1.1 }} // Example hover animation, adjust as needed
            whileTap={{ scale: 0.9 }} // Example tap animation, adjust as needed
          >
            Хоосон байна😊
          </motion.div>
        </div>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={closeModal} children={undefined} />
    </>
  );
};

export default Profile;
