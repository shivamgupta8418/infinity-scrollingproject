import React from "react";
import { motion } from "framer-motion";
import shivamPic from "./../assets/shivam-pic.jpeg";

const HomePage = () => {
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 rounded-lg shadow-lg p-4 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        className=" w-full lg:w-80 mt-15 lg:h-100 rounded-lg lg:mr-4 mb-4 lg:mb-0"
        src={shivamPic}
        alt="Shivam"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Assignment
        </h1>
        <p className="text-lg text-gray-600">
          A proficient developer with more than one year of hands-on experience
          in the MERN stack, adept at crafting diverse features such as billing
          sections and pivotal components for organizational advancement.
          Demonstrated expertise includes skillful navigation of the MERN
          technology stack to engineer robust solutions that meet business
          objectives with precision.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          8418072379
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
