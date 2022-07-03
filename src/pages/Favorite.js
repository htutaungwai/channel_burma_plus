import { motion } from "framer-motion";
import { useEffect } from "react";
const Favorite = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0, transition: 0.8 }}
    >
      Favorite
    </motion.div>
  );
};

export default Favorite;
