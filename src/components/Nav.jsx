import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full  ">
      <nav
        className="flex justify-between items-center max-container sm:px-7
      "
      >
        <a href="/" className="m-0">
          <img
            src={headerLogo}
            alt="header-logo"
            className="w-[130px] h-[29px]  m-0 "
          />
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
        <img
          src={hamburger}
          alt="hamburger-icon"
          className="w-[25px] h-[25px] 
          hover:cursor-pointer md:hidden mx-5"
        />

        {/* <div className="pr-0.5">Themetoggle</div>  dark theme à développer */}
      </nav>
    </header>
  );
};

export default Nav;
