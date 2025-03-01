import { arrowRight } from "../assets/icons";
import { bigShoe3 } from "../assets/images";
import Button from "../components/button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe3);
  return (
    <section className="w-full flex  gap-10 xl:flex-row flex-col justify-center items-center min-h-screen max-container">
      <div
        className="relative xl:w-2/5 flex flex-col justify-center 
        items-start w-full  max-xl:padding-x pt-28 "
      >
        <p className="text-xl font-montserrat text-coral-red sm:mx-0 ">
          Our Summer collections
        </p>

        <h1 className="mt-10 sm:mx-0 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[75px] leading-30 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10  space-x-7">
            The New <span className=""> Arrival </span>
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat sm:mx-0 text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="mt-8 flex justify-start items-start flex-wrap w-full md:mt-10 md:gap-16">
          {statistics.map((itemStat) => (
            <div key={itemStat.label}>
              <p className="text-2xl md:text-5xl font-palanquin font-bold ">
                {itemStat.value}
              </p>
              <p className="text-sm md:text-lg font-montserrat leading-5 text-slate-gray">
                {itemStat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative w-full  flex-1 flex justify-center items-center xl:min-h-screen sm:py-30 py-25
      bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="
        object-contain relative z-10
        "
        />
        <div className="flex justify-center items-center absolute -bottom-[5%]  ">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.thumbnail}
              imgUrl={shoe}
              bigShoeImg={bigShoeImg}
              changeBigshoeImg={() => setbigShoeImg(shoe.bigShoe)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
