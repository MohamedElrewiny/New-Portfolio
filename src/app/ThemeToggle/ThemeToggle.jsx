import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
<>
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-3 right-6 z-70 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <motion.div
          key="moon"
          initial={{ rotate: -30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 30, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaMoon />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ rotate: 30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -30, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaSun />
        </motion.div>
      )}
    </motion.button>
</>
  );
};

export default ThemeToggle;