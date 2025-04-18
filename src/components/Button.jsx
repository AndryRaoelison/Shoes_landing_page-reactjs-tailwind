/* eslint-disable react/prop-types */
const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  className,
}) => {
  return (
    <button
      className={
        `flex justify-center items-center  gap-2 lg:mx-0 cursor-pointer rounded-full
    px-7 py-3.5   font-montserrat text-lg
    ${fullWidth && "w-full "}
    ${
      backgroundColor
        ? (backgroundColor, borderColor, textColor, "border")
        : " border-red-500 bg-coral-red  text-white"
    }` + ` ${className}`
      }
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt={label}
          className="ml-2 rounded-full mx-0  w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
