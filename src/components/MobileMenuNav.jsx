import { arrowRight } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./button";

// eslint-disable-next-line react/prop-types
const MobileMenuNav = ({ onToggleMenu }) => {
  return (
    <div className=" min-h-[65%]  absolute top-[98px] left-0 right-0 m-0 bg-white opacity-95  md:hidden py-5 px-5">
      <div className="min-w-[350px]  shadow-3xl w-full  py-10 px-10  ">
        <ul className="flex flex-col gap-8">
          {navLinks.map((link) => {
            return (
              <li key={link.label} className="m-0 ">
                <a
                  onClick={() => onToggleMenu(false)}
                  href={link.href}
                  className=" inline-block leading-normal text-slate-gray
                   text-lg font-montserrat hover:text-coral-red font-semibold  px-5 py-1"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <Button label="Shop now" className={"mt-5"} iconURL={arrowRight} />
      </div>
    </div>
  );
};

export default MobileMenuNav;
