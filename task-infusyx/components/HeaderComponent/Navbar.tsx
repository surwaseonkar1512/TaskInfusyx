"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "MBBS in Uzbekistan", href: "/mbbs-in-uzbekistan" },
    { name: "Universities", href: "/universities" },
    { name: "Blogs", href: "/blogs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="bg-black ">
      <div className=" mx-auto max-w-[1200px]  w-full flex items-center justify-between p-4  text-white">
        <div className="text-2xl font-bold">Uzbekistan Medi</div>

        <div className="hidden md:flex space-x-12 mx-[100px]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-colors-primary text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="p-2 text-white rounded-md md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Popup Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-start justify-start space-y-6 text-lg z-50 pl-10"
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 text-white"
              >
                <X size={24} />
              </button>

              {/* Mobile Menu Links */}
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:underline text-xl text-white"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
