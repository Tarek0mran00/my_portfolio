import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from '../../styles.js';
import { navLinks } from "../../Constants/constants";
import { bl33hIcon, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5
        fixed top-0 z-20 bg-primary
      `}
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
          <img src={bl33hIcon} alt="bl33hIcon" className="w-18 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {/* Additional content can be added here if needed */}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 text-white">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-white"
                } hover:text-white text-[24px] font-bold cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a
                  href={`#${link.id}`}
                  style={{ color: 'white', textDecoration: 'none' }} // Ensuring text is white
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28px] h-[28px] object-contain cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt={menu}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-20 p-6 black-gradient absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-white"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      style={{ color: 'white', textDecoration: 'none' }} // Ensuring text is white
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
