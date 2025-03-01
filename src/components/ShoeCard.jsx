/* eslint-disable react/prop-types */
const ShoeCard = ({ imgUrl, bigShoeImg, changeBigshoeImg }) => {
  return (
    <div
      className={`bg-card bg-cover  bg-center mx-2 py-4 sm:mx-4 px-4 sm:py-6 border-2 rounded-lg z-10
        cursor-pointer
        ${
          imgUrl.bigShoe === bigShoeImg
            ? "border-coral-red "
            : "border-gray-200"
        }`}
      onClick={() =>
        bigShoeImg !== imgUrl.bigShoe ? changeBigshoeImg(imgUrl.bigShoe) : null
      }
    >
      <img
        src={imgUrl.thumbnail}
        alt="Miniature chaussure "
        className="object-contain  max-sm:h-[80px] max-sm:w-[100px]"
      />
    </div>
  );
};

export default ShoeCard;

//   const handleClick = () => {
//     if () {
//       changeBigshoeImg(imgUrl.bigShoe);
//     }
//   };
