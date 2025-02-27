const Button = ({ label, iconURL }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 sm:mx-0
    px-7 py-4 border font-montserrat text-lg border-red-500 bg-coral-red rounded-full text-white"
    >
      {label}
      <img src={iconURL} alt={label} className="ml-2 rounded-full  w-5 h-5" />
    </button>
  );
};

export default Button;
