import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from "react-icons/fa";
import mainLogo from "../../assets/image/mainLogo.jpg";
import "./Navbar.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#03346E] text-white">
      <div className="top-bar flex flex-wrap justify-between p-4 text-sm">
  <div className="flex space-x-6 flex-wrap">
    <span className="flex items-center">
      <IoLocationSharp className="mr-2 w-5 h-5" />
      Filderbahnstraße 10, 70771 Leinfelden-Echterdingen
    </span>
    <span className="flex items-center">
      <IoMdCall className="mr-2 w-5 h-5" />
      0157 / 54300430
    </span>
    <span className="flex items-center">
      <MdEmail className="mr-2 w-5 h-5" />
      info@cebeci-dienstleistung.de
    </span>
  </div>
  <div className="flex space-x-4 hidden sm:flex">
    <a href="#" className="hover:text-[#00aaff] transition-all duration-300">
      <FaInstagram className="w-5 h-5" />
    </a>
  </div>
</div>



      {/* Main Navigation Bar */}
      <nav className="main-nav border-t border-white/20 shadow-md bg-white text-[#03346E]">
  {/* Logo and Navigation Links */}
  <div className="flex justify-between items-center px-4 py-4">
    {/* Logo Section */}
    <div className="flex items-center space-x-4">
      <img
        src={mainLogo}
        alt="Company Logo"
        className="w-24 h-24 rounded-full"
      />
      <span className="text-xl font-bold transition duration-300 cursor-pointer">
      GeutariEntrümpelung
      </span>
    </div>

    {/* Mobile Menu Button */}
    <div className="lg:hidden flex items-center space-x-4">
  <button onClick={toggleMenu} className="text-3xl">
    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
  </button>
</div>


    {/* Desktop Menu */}
    <ul className="hidden lg:flex space-x-8">
      {["Startseite", "Über uns", "Warum wir?", "Dienstleistungen", "Kontakt"].map(
        (item) => (
          <li key={item} className="relative group">
            <a
              href="#"
              className="text-[#03346E] font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:text-[#0a1e3b] focus:outline-none focus:ring-2 focus:ring-[#00aaff] focus:ring-offset-2"
            >
              {item}
            </a>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#0a1e3b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        )
      )}
    </ul>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="lg:hidden bg-white text-[#03346E] px-4 py-2 space-y-4">
      {["Startseite", "Über uns", "Warum wir?", "Dienstleistungen", "Kontakt"].map(
        (item) => (
          <a
            key={item}
            href="#"
            className="block text-lg font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:text-[#0a1e3b]"
          >
            {item}
          </a>
        )
      )}
    </div>
  )}
</nav>

    </header>
  );
};

export default Navbar;
