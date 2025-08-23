import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"; // if using React Router

export default function Loader({ logo, firmName }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Trigger on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader visible duration
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Logo"
            className="w-25 h-25 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Firm Name with fade left-to-right */}
          <motion.h1
            className="text-3xl font-bold tracking-wide text-gray-800 font-[bitum]"
            initial={{
              backgroundImage: "linear-gradient(to right, transparent, black, transparent)",
              backgroundSize: "200% 100%",
              backgroundPosition: "200% 0",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animate={{
              backgroundPosition: ["200% 0", "0% 0"],
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              backgroundImage: "linear-gradient(to right, #000, #000, transparent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {firmName}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
