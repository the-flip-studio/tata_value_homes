import React from "react";

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-5 md:px-20 pr-7 pt-6 pb-4 text-lg bg-black bg-opacity-60 text-white z-50 transition-all duration-300`}
    >
      {/* Left Section (Logo) */}
      <div className="flex items-center">
        <span className="text-xl md:text-2xl font-bold">TATA VALUE HOMES</span>
      </div>

      {/* Center Section (Navigation Links) */}
      <div className="hidden md:flex gap-8 md:gap-16 font-bold">
        <a
          href="#overview"
          className=""
        >
          OVERVIEW
        </a>
        <a
          href="#gallery"
          className=""
        >
          GALLERY
        </a>
        <a
          href="#contactUs"
          className=""
        >
          CONTACT US
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          id="menu-btn"
          className="block hamburger focus:outline-none"
          aria-label="Menu"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
