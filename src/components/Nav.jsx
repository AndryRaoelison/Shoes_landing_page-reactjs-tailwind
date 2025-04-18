import { headerLogo } from "../assets/images/index";
import { close, hamburger } from "../assets/icons/index";
import { navLinks } from "../constants/index";
import { useState } from "react";
import MobileMenuNav from "./MobileMenuNav";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header
      className={
        `padding-x py-8  w-full fixed  z-20  h-[100px] ` +
        (toggleMenu ? " bg-white opacity-95" : " not-first-of-type:")
      }
    >
      <nav
        className="flex justify-between items-center max-container sm:px-7
      "
      >
        <a href="/" className="m-0 flex items-center justify-start ">
          <img
            src={headerLogo}
            alt="header-logo"
            className=" lg:h-[75px] max-lg:h-[50px]  m-0 "
          />
          <h1 className="font-palanquin font-bold lg:text-4xl text-xl ">
            {" "}
            <span className="text-coral-red">Vake </span> Shoes
          </h1>
        </a>
        <ul
          className="flex gap-20  justify-center items-center
          max-md:hidden max-lg:gap-7 m-0"
        >
          {navLinks.map((link) => {
            return (
              <li key={link.label} className="m-0">
                <a
                  href={link.href}
                  className="leading-normal text-slate-gray text-lg font-montserrat
                   m-0"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        {toggleMenu ? (
          <img
            src={close}
            alt="hamburger-icon"
            className="w-[25px] h-[25px] 
          hover:cursor-pointer md:hidden mx-5"
            onClick={onToggleMenu}
          />
        ) : (
          <img
            src={hamburger}
            alt="hamburger-icon"
            className="w-[25px] h-[25px] 
          hover:cursor-pointer md:hidden mx-5"
            onClick={onToggleMenu}
          />
        )}

        {/* <div className="pr-0.5">Themetoggle</div>  dark theme à développer */}
      </nav>

      {toggleMenu && <MobileMenuNav onToggleMenu={onToggleMenu} />}
    </header>
  );
};

export default Nav;
