import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResumes, setShowResumes] = useState(false); // State for showing modal

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    setShowResumes(true);
  };

  const closeModal = () => {
    setShowResumes(false);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[25px] font-bold cursor-pointer flex">
            Akeem Bello &nbsp;
            <span className="sm:block hidden">
              | Software Engineer & Data Analyst
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) =>
            nav.resumes ? (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[20px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(nav.title);
                  handleResumeClick();
                }}
              >
                {nav.title}
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[20px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) =>
                nav.resumes ? (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                      handleResumeClick();
                    }}
                  >
                    {nav.title}
                  </li>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Resumes */}
      {showResumes && (
  <div className="fixed inset-0 flex justify-center items-center z-50">
    {/* Popup */}
    <div className="relative bg-gradient-to-r from-gray-800 via-black to-gray-900 border border-gray-700 rounded-3xl shadow-2xl p-10 w-[90%] max-w-xl overflow-hidden">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 w-10 h-10 flex justify-center items-center bg-red-500 text-white text-xl rounded-full shadow-md hover:bg-red-600 hover:scale-110 transition-transform"
        aria-label="Close"
      >
        ✖
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Explore My Resumes
        </h2>
        <p className="text-gray-400 mt-2">
          Choose one below and explore.
        </p>
      </div>

      {/* Resume List */}
      <ul className="space-y-6">
        {navLinks
          .find((nav) => nav.id === "resume")
          ?.resumes.map((resume) => (
            <li key={resume.href}>
              <a
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-4 text-center text-white text-lg font-medium bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-700 rounded-lg shadow-lg hover:from-purple-500 hover:via-indigo-600 hover:to-blue-500 transform hover:-translate-y-1 transition-all relative group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 blur-lg opacity-50 rounded-lg group-hover:opacity-70"></span>
                <span className="relative">{resume.title}</span>
              </a>
            </li>
          ))}
      </ul>

      {/* Subtle Decorations */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-red-500 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </div>
  </div>
)}



    </nav>
  );
};

export default Navbar;
