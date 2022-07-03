import { motion } from "framer-motion";
const Insight = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0, transition: 0.8 }}
      className="w-full h-full min-h-screen bg-secondBgColor"
    >
      <div className="w-full p-4 ">
        <h2 className="text-white poppins font-bold text-xl mb-2">Generes</h2>
      </div>
    </motion.div>
  );
};

export default Insight;
