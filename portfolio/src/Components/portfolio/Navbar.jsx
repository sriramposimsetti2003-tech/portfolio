import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-900/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-indigo-300 to-white bg-clip-text text-transparent">
              SP
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-300 group-hover:w-4/5 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sriram-posimsetti-a78708394"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69418ef16335bfcf49e1213b/71747de1b_Sriram_Posimsetti_Resume2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-sm font-medium rounded-full hover:from-indigo-500 hover:to-indigo-600 transition-all hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800/98 backdrop-blur-xl border-t border-slate-700"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg font-medium text-slate-200 hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-4 flex items-center gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/sriram-posimsetti-a78708394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 rounded-full text-slate-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sriramposimsetti2003@gmail.com"
                  className="p-2 bg-slate-700 rounded-full text-slate-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
