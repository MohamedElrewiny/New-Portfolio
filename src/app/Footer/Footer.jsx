import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setShowButton(scrollPosition > viewportHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-4 relative">
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="flex fixed bottom-7 right-0 justify-center bg-[#143D95] items-center mb-8 w-[40px] h-[40px] rounded-full mx-5"
        >
          <motion.a
            href="#home"
            whileHover={{ y: -5 }}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.a>
        </motion.div>
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-center mb-4">Dev.Morad</h3>
            <p className="text-gray-600 text-center dark:text-gray-400">
              A passionate Frontend Developer creating modern web applications
              with great user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#qualification"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Qualification
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-3">
              <motion.a
                href="https://github.com/MohamedElrewiny"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohamed-morad-a8457833b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/mohamed.elrewiny.357?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/m.a.morad22?igsh=MTN5b2hibWc1NDlmcg=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://wa.me/+9660570034062"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-4 text-center text-gray-600 dark:text-gray-400"
        >
          <p>
            © {currentYear} <span className="text-white">Mohamed Morad</span>.
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
