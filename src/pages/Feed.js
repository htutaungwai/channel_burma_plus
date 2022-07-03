import React from "react";
import FeedContainer from "../components/Feed/FeedContainer";
import { motion } from "framer-motion";
const Feed = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0, transition: 0.8 }}
    >
      <FeedContainer />
    </motion.div>
  );
};

export default Feed;
