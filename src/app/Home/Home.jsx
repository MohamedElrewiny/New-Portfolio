import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <AnimatePresence>
      {activeSection === "home" && (
        <motion.section
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex flex-col justify-center"
        >
          <div className="text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hi, I&apos;m <span className="text-primary">MOHAMED MORAD</span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Senior Frontend Developer | React & Next.js
            </motion.p>
            <div className="flex gap-4 justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="#contact"
                  className="inline-block    border-2  text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  Contact Me
                </a>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/assets/cv/myCV.pdf"
                  download="Mohamed_Morad_CV.pdf"
                  className="inline-block bg-[#143D95] text-white border-2 border-[#143D95] px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  Download CV
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
