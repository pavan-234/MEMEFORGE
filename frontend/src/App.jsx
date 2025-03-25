import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold">Welcome to MemeForge</h1>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Generate Meme
      </motion.button>
    </motion.div>
  );
};

export default Home;
