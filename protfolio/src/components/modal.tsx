import React, { useState } from "react";
import { motion } from "framer-motion";

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
            <div className="w-[800px] h-[400px] grid grid-cols-2">
              <div className="col-span-1 grid grid-cols-2 grid-rows-2 p-8">
                <motion.div
                  className="col-span-1 row-span-1 border rounded-2xl border-zinc-600 w-32 h-32"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="" alt="test" />
                </motion.div>
                <motion.div
                  className="col-span-1 row-span-1 border rounded-2xl border-zinc-600 w-32 h-32"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="" alt="test" />
                </motion.div>
                <motion.div
                  className="col-span-1 row-span-1 border rounded-2xl border-zinc-600 w-32 h-32"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="" alt="test" />
                </motion.div>
                <motion.div
                  className="col-span-1 row-span-1 border rounded-2xl border-zinc-600 w-32 h-32"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="" alt="test" />
                </motion.div>
              </div>
              <div className="col-span-1">3</div>
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
