import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/button";
const SpecialOffer = () => {
  return (
    <section
      className="flex flex-wrap max-md:flex-col-reverse lg:px-10
    items-center max-container gap-10"
    >
      <div className="flex flex-1 items-center ">
        <img
          src={offer}
          alt="offer shoes illustration"
          width={777}
          height={400}
          className="object-contain w-full  max-md:ml-7"
        />
      </div>
      <div
        className="flex flex-col flex-1 justify-center gap-8 
        items-start lg:px-10   "
      >
        <h2 className="lg:mx-0 font-palanquin text-5xl  leading-15 font-bold">
          <span className="text-coral-red inline-block ">Special</span> Offer
        </h2>
        <p className="info-text font-montserrat mx-0 sm:max-w-lg max-md:text-md ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          repudiandae ullam cupiditate placeat molestias reiciendis
        </p>
        <p className="info-text font-montserrat mx-0 sm:max-w-lg  max-md:text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab eos
          omnis enim sed deleniti unde eum non quod blanditiis deserunt laborum
          maiores nostrum illo, ut beatae tempore aut saepe.
        </p>
        <div className="flex  flex-wrap lg:mx-0 gap-4 w-full ">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
