import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants/navLinks";
import { useState, useEffect } from "react";

const Header = ({ activeSection }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 shadow-lg"
          : "bg-gray-900/80"
      } backdrop-blur-md`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#143D95] to-[#5fdbfa] text-transparent bg-clip-text hover:scale-105 transition-transform"
          >
            Dev.<span className="text-white">Morad</span>
          </motion.a>

          <ul className="hidden md:flex space-x-3">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: link.id * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={`#${link.id}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.title}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-[#5fdbfa] "
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg :text-gray-300 hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {showMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col border border-gray-600 space-y-2 py-4 px-4 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: link.id * 0.1 }}
                  >
                    <a
                      href={`#${link.id}`}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === link.id
                          ? "text-primary bg-gray-800"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                      onClick={() => setShowMenu(false)}
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
