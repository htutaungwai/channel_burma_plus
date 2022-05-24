import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleFYIFlag } from "../features/menu/menu";

const FYI = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      onClick={() => {
        dispatch(toggleFYIFlag());
      }}
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      exit={{ y: -10 }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="w-[45px] h-[45px] fixed bottom-10 right-10 bg-slate-300 rounded-full flex justify-center items-center cursor-pointer shadow-sm shadow-white border-none"
    >
      <AiFillQuestionCircle className=" w-full h-full text-blue-600  text-base rounded-full" />
    </motion.div>
  );
};

export default FYI;
