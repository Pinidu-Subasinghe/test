import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 text-white p-6 bg-transparent backdrop-filter backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          FINASTRA
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-purple-300 transition-colors">
            Home
          </a>
          <a
            href="#speakers"
            className="hover:text-purple-300 transition-colors"
          >
            Speakers
          </a>
          <a
            href="#schedule"
            className="hover:text-purple-300 transition-colors"
          >
            Schedule
          </a>
          <a href="#about" className="hover:text-purple-300 transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="hover:text-purple-300 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
