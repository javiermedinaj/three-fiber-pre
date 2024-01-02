import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-gray-600 py-2 text-neutral-700 shadow-lg hover:text-neutral-300 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4
       dark:bg-gray-800 dark:text-black-200"
        data-te-navbar-ref=""
      >
        <div className="container mx-auto flex items-center justify-between px-3">
          <div className="mx-2">
            <a className="text-xl text-neutral-100" href="#">
              Navbar
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6h16M3 12h16m-7 6h7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}
            id="navbarSupportedContent10"
          >
            <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
              <li className="my-4 pl-2 lg:my-0 lg:pl-0 lg:pr-1">
              <button
        className="text-white focus:outline-none"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
              </li>
              <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                <a
                  className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
           
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">
                <a
                  className="p-0 text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                  href="#"
                >
                  Works
                </a>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">
                <a
                  className="p-0 text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
