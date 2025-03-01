/* eslint-disable react/prop-types */
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="min-w-[350px] sm:w-[350px]  shadow-3xl w-full  py-10 px-10 mx-2
    "
    >
      <div
        className="flex justify-center items-center bg-coral-red h-12 w-12 
      rounded-full p-1 mx-0 "
      >
        <img src={imgURL} alt={label} className="object-contain w-[30px]" />
      </div>
      <h3 className="mt-2 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-2 text-sm text-slate-gray font-montserrat leading-normal  ">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
