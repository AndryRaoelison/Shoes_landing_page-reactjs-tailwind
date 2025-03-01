import { shoe8 } from "../assets/images";
import Button from "../components/button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between lg:items-center
       max-lg:flex-col items-start gap-10 max-container lg:px-10"
    >
      <div
        className="flex flex-col flex-1 justify-center gap-8 
        items-start w-full lg:px-10   "
      >
        <h2 className="lg:mx-0 font-palanquin text-5xl  leading-15 font-bold ">
          Providing you {window.innerWidth < 1024 ? null : <br />}
          <span className="text-coral-red inline-block ">
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="info-text font-montserrat lg:mx-0 lg:max-w-lg  break-words">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          repudiandae ullam cupiditate placeat molestias reiciendis
        </p>

        <Button label="View details" />
      </div>
      <div className="flex md:justify-center justify-start items-center  lg:mx-0 px-0 ">
        <img src={shoe8} alt="Shoe TN" className="lg:mx-0 object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
