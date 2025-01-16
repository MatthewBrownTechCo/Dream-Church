"use client";

import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Hamburger Icon - visible only on small screens */}
      <div className="flex items-center justify-between p-4 md:">
        <button onClick={toggleMenu} className="text-gray-800">
          <span
            className={`block w-8 h-1 bg-black mb-2 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black mb-2 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black mb-2 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu - visible only when 'isOpen' is true */}
      <div
        className={`absolute top-0 left-0 w-full bg-white transform transition-all ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <a href="/" className="text-lg text-gray-800 hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-lg text-gray-800 hover:text-gray-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-lg text-gray-800 hover:text-gray-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-lg text-gray-800 hover:text-gray-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Menu - always visible on medium screens and up */}
      <div className="hidden md:flex space-x-4">
        <a href="/" className="text-lg text-gray-800 hover:text-gray-600">
          Home
        </a>
        <a href="/about" className="text-lg text-gray-800 hover:text-gray-600">
          About
        </a>
        <a
          href="/services"
          className="text-lg text-gray-800 hover:text-gray-600"
        >
          Services
        </a>
        <a
          href="/contact"
          className="text-lg text-gray-800 hover:text-gray-600"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
