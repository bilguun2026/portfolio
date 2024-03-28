import React, { useState } from "react";
import { motion } from "framer-motion";
import khan from "../assets/banklogo/khanbankreal.png";
import M from "../assets/banklogo/mbank.png";
import gol from "../assets/banklogo/Golgomtbankreal.png";
import stat from "../assets/banklogo/Statebankreal.png";
import qr from "../assets/banklogo/QR.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white rounded-lg p-8"
            variants={modalVariants}
          > 
          <div className="font-extrabold">QR Төлбөр төлөх</div>
          <div className="font-bold">Нийт 7'499₮</div>
            <div className="w-[800px] h-[400px] grid grid-cols-2">
              <div className="col-span-1 grid grid-cols-2 grid-rows-2 p-8">
                <motion.div
                  className="col-span-1 row-span-1 border rounded-2xl border-zinc-600 w-32 h-32 bg-black flex items-center justify-center p-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <img className="object-cover" src={M} alt="test" />
                </motion.div>
                <motion.div
                  className="col-span-1 row-span-1 border rounded-2xl w-32 h-32"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    className=" rounded-2xl w-32 h-32 "
                    src={khan}
                    alt="test"
                  />
                </motion.div>
                <motion.div
                  className="col-span-1 row-span-1 border rounded-2xlw-32 h-32"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    className=" rounded-2xl w-32 h-32 "
                    src={gol}
                    alt="test"
                  />
                </motion.div>
                <motion.div
                  className="col-span-1 row-span-1 w-32 h-32"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    className=" rounded-2xl w-32 h-32 "
                    src={stat}
                    alt="test"
                  />
                </motion.div>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center">
                <img src={qr} className="w-96 h-96"/>
              </div>
            </div>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
