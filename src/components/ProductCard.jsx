/* eslint-disable react/prop-types */
import { star } from "../assets/icons";

const ProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-col mt-2 px-0  w-full max-sm:w-full ">
      <img
        src={imgURL}
        alt={name}
        className="  flex-1 max-lg:w-[250px] lg:m-0  object-contain"
      />
      <div className="lg:mx-0 mt-4 flex justify-start gap-2 ">
        {Array.from({ length: rating }, (_, index) => (
          <img
            key={index}
            src={star}
            alt="rating"
            className="w-[24px] h-[24px] mx-0 "
          />
        ))}
      </div>
      <p className="lg:mx-0 mt-2  font-semibold font-palanquin text-md sm:text-xl">
        {name}
      </p>
      <p className="lg:mx-0 mt-2 font-montserrat text-coral-red text-sm font-semibold">
        Price : {price} test
      </p>
    </div>
  );
};

export default ProductCard;
