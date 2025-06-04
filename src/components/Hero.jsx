import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profilePic from "../assets/myprofilepick.jpg";
import CanvasLoader from "./Loader";

// Icons
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    // Only close if background is clicked (not image)
    if (e.target.id === "modal-background") {
      setIsModalOpen(false);
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[60px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col items-start justify-center relative z-10">
          <h1 className={`${styles.heroHeadText} text-white flex items-center`}>
            <img
              src={profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4 mr-4 cursor-pointer border-2 border-white"
              onClick={handleProfileClick}
            />
            <span>
              Hi, I'm <span className="text-[#915EFF]">Tousif</span>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer with internship experience at DhruthZuci Tech
            Solutions and a solution-oriented company. 
            Currently working on LLMs and Generative AI. AWS Certified Cloud
            Practitioner with strong MERN stack skills.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-5 text-white text-2xl relative z-10">
            <a
              href="https://www.linkedin.com/in/tousif-pasha7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Tousif-Pro/Tousif-Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/Tousif07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <motion.img
            src={profilePic}
            alt="Profile"
            className="max-w-full max-h-full rounded-lg"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        </div>
      )}

      {/* Canvas with loading indicator */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<CanvasLoader />}>
          <ComputersCanvas />
        </Suspense>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
