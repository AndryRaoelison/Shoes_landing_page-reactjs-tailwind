import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-6 items-start mx-0 flex-1">
          <img
            src={footerLogo}
            alt="footerLogo"
            height={200}
            width={200}
            className=" mx-0"
          />
          <p className="text-slate-gray max-w-sm font-montserrat text-md leading-normal mx-0">
            Get shoes ready for the new term at your nearest Nike store. Find
            you perfect size in Store. Get rewards.
          </p>
          <div className=" flex gap-5 mx-0">
            {socialMedia.map((media) => (
              <img
                key={media.alt}
                src={media.src}
                alt={media.alt}
                className="bg-white p-1.5 rounded-full cursor-pointer"
                height={40}
                width={40}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 text-white mx-0 flex-wrap gap-5  justify-between ">
          {footerLinks.map((footerLink) => {
            return (
              <div key={footerLink.title} className="mx-0">
                <h1 className="font-semibold text-2xl font-montserrat">
                  {footerLink.title}
                </h1>
                <ul>
                  {footerLink.links.map((footerlinkItem) => (
                    <li
                      key={footerlinkItem.name}
                      className=" hover:text-white text-slate-gray font-montserrat"
                    >
                      <a href={footerlinkItem.link} className="text-sm ">
                        {footerlinkItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:items-center mx-0 mt-10 justify-between">
        <div className="flex justify-center mx-0 gap-1">
          <img
            src={copyrightSign}
            alt="copy right sign "
            height={15}
            width={15}
            className="mx-0"
          />
          <p className="text-slate-gray  mx-0 text-md">Copyright</p>
        </div>
        <div className=" mx-0">
          <a href="#" className="text-slate-gray">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
0;
