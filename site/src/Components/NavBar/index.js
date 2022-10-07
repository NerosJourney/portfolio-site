import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

//border-b-4 border-b-rose-500

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="z-40">
      <div className="flex pt-4 bg-slate-700 drop-shadow-2xl shadow-2xl font-serif border-b-4 border-b-rose-500">
        <Link
          to="/"
          className="navbar-item mr-auto text-cyan-500 text-5xl visible w-auto px-8 mb-0"
        >
          Nero
        </Link>
        <HorizontalNav />
        <HamburgerNavButton
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
      </div>
      <HamburgerNavMenu navbarOpen={navbarOpen} />
    </div>
  );
};

const HorizontalNav = () => {
  return (
    <>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/experience" className="navbar-item">
        Experience
      </Link>
      <Link to="/projects" className="navbar-item">
        Projects
      </Link>
      <Link to="/about" className="navbar-item">
        About
      </Link>
    </>
  );
};

const HamburgerNavButton = ({ navbarOpen, setNavbarOpen }) => {
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className="font-bold text-cyan-100 py-2 px-6 text-2xl flex md:invisible md:w-0 md:px-0"
    >
      {navbarOpen ? <FaTimes size={50} /> : <FaBars size={50} />}
    </button>
  );
};

const HamburgerNavMenu = ({ navbarOpen }) => {
  return (
    <ul className={`hamburger-menu ${navbarOpen ? " show-menu" : ""}`}>
      <li className="hamburger-item">
        <Link to="/">Home</Link>
      </li>
      <li className="hamburger-item">
        <Link to="/experience">Experience</Link>
      </li>
      <li className="hamburger-item">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="hamburger-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};

export default NavBar;
