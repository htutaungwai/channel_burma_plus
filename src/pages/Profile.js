import { motion } from "framer-motion";
const Profile = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0, transition: 0.8 }}
      className="w-full min-h-screen"
    ></motion.div>
  );
};

export default Profile;
