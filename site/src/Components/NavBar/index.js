import React, { useState } from "react";
import { Link } from "react-router-dom";

//border-b-4 border-b-rose-500

const NavBar = () => {
  return (
    <div className="flex py-4 bg-slate-700 drop-shadow-2xl font-serif">
      <Link
        to="/"
        className="navbar-item mr-auto text-cyan-500 text-3xl visible w-auto px-8"
      >
        Bailey Wimer
      </Link>
      <HorizontalNav />
      <HamburgerNav />
    </div>
  );
};

const HorizontalNav = () => {
  return (
    <>
      <Link to="/" className="navbar-item">
        Home
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

const HamburgerNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className="font-bold text-cyan-100 py-2 px-6 text-2xl flex md:invisible md:w-0 md:px-0"
    >
      {navbarOpen ? "Close" : "Open"}
    </button>
  );
};

export default NavBar;
