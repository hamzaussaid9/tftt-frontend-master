import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const DesktopNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#8E7E7E]">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-24 pt-1">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="#pablo"
          >
            Tip For the Trip
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <button
                className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                onClick={() => {
                  setToggleSearch(!toggleSearch);
                }}
              >
                <BsSearch className="text-lg" />
              </button>
            </li>
            <li className="nav-item">
              <a
                className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">History</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Store</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">News</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Login</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <ul className="flex float-right flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item mx-16 my-1">
            {toggleSearch && (
              <input
                type="text"
                placeholder="Search"
                className="px-2 placeholder-black"
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
